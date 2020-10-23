import productMapping from "./product.mapping";
import productSamples from "./product.sample";
import { ElasticService } from "../elastic/elastic.service";
import { Uploader } from "../uploader/upload.service";
import { IProductInput, RepositoryResponse } from "../../defs";
import cardParsers from "./product.parser";
import cloudinary from "../uploader/cloudinary.config";
import slugify from "../../utils/slugify";
import Logger from "../logger/logger.service";

class ProductStore extends ElasticService {
  uploader = new Uploader();
  constructor() {
    super("product", productMapping);
    //this.once("product_mapping_done", () => this.hydrateProductIndex());
  }

  async updateProduct({ id, product }) {
    const { sellerid, ...productRest } = product;

    if (productRest.collection && productRest.collection.cardType) {
      productRest.cardType = productRest.collection.cardType;
    }

    const updateResponse = await this.update({
      id,
      record: productRest,
      parser: "toBoolResponse"
    });

    if (updateResponse.status !== 200) {
      return updateResponse;
    }

    const catalogueResponse = await this.generateCatalogue(sellerid);

    if (catalogueResponse.status !== 200) {
      return catalogueResponse;
    }

    const catalogueUpdateResponse = await this.update({
      index: "place",
      id: sellerid,
      record: { catalogue: catalogueResponse.payload },
      parser: 'toBoolResponse'
    });

    return {
      status: 200,
      error: null,
      payload: {
        catalogueUpdated: catalogueUpdateResponse.payload,
        productUpdated: updateResponse.payload
      }
    }
  }

  async refreshCatalogue(sellerid: string) {
    const catalogueResponse = await this.generateCatalogue(sellerid);

    if (catalogueResponse.status !== 200) {
      return catalogueResponse;
    }

    return await this.update({
      index: "place",
      id: sellerid,
      record: { catalogue: catalogueResponse.payload },
      parser: 'toBoolResponse'
    });
  }

  async addToSellerCollection(product: IProductInput) {
    const { sellerid, ...productData } = product;
    const response: RepositoryResponse = await this.get({
      id: sellerid,
      index: "place"
    });

    if (response.status !== 200) {
      return response;
    }

    const seller = response.payload;

    const cardTypeResponse = await this.get({
      index: "meta",
      id: productData.collection.id,
    });
    console.log("cardTypeResponse LOG", cardTypeResponse);
    if (cardTypeResponse.status !== 200) {
      return cardTypeResponse;
    }

    const { attributes } = cardTypeResponse.payload;
    if (!attributes || !Array.isArray(attributes)) {
      return Logger.error({
        moduleType: "MetaRepository",
        module: "Repository",
        method: "addMeta",
        error: {
          status: 500,
          type: "standard",
          msg:  'CardType is missing from collection'
        }
      });
    }

    const cardTypeAttr = attributes.filter((attr:any) => attr.name === "cardType")[0];
    console.log("cardTypeAttr LOG", cardTypeAttr);
    const tmp = {
      id: slugify(`${seller.name}-${productData.name}`),
      ...productData,
      __typename: "Product",
      cardType: cardTypeAttr.value,
      seller: {
        id: seller.id,
        name: seller.name,
        categories: seller.categories,
        email: seller.contact && seller.contact.email,
        phone: seller.contact && seller.contact.phone,
        logo: seller.logo,
        ranking: seller.ranking,
        ...seller.location
      },
      tags: [
        {
          "input": [productData.name],
          "weight": 1
        },
        {
          "input": [productData.collection.name],
          "weight": 1
        },
        {
          "input": [productData.category.name],
          "weight": 2
        },
      ]
    }

    if (!cardParsers[tmp.cardType]) {
      return {
        status: 404,
        error: `Invalid Card: ${tmp.cardType} doesn't exist`,
        payload: null
      }
    }

    const record = { ...tmp, ...cardParsers[tmp.cardType](tmp) }

    return await this.create({
      record,
      options: {
        ranking: true
      }
    });
  }

  getProductsByPlace(placeid, searchParams) {
    const { match, size, from, q } = searchParams;
    const req = {
      body: {
        query: {
          bool: {
            must: this.buildTerms(match)
          }
        }
      },
      q,
      size: size || 10,
      from: from || 0
    };
    return this.search(req);
  }

  async getGroup(placeid) {
    const req = {
      body: {
        query: {
          bool: {
            must: {
              term: {
                "place.id": placeid
              }
            }
          }
        },
        aggs: {
          group: {
            terms: {
              field: "category",
              size: 10
            },
            aggs: {
              collections: {
                terms: {
                  field: "collection"
                }
              }
            }
          }
        }
      }
    };

    try {
      const { body, statusCode } = await this.esclient.search(req);
      const resp = body.aggregations.group.buckets.map(group => {
        return {
          name: group.key,
          value: group.doc_count,
          children: group.collections.buckets.map(collection => {
            return {
              name: collection.key,
              value: collection.doc_count
            };
          })
        };
      });
      return {
        payload: resp,
        status: statusCode,
        error: "NONE"
      };
    } catch (e) {
      return {
        payload: false,
        status: 500,
        error: "DATABASE ERROR"
      };
    }
  }

  async addPictures({ productid, pictures, formatType }) {
    try {
      const upload = await this.uploader.upload(pictures, formatType);
      if (upload.status === 200) {
        const commits = await this.uploader.commitToElastic(
          "product",
          productid,
          upload.payload
        );
        const response = await this.bulkAction(commits);
        return response;
      }
      return upload;
    } catch (e) {
      console.log("FAILED TO ADD PICTURE =====> ", e);
      return {
        status: 500,
        error: "FAILED TO ADD PICTURE",
        payload: false
      };
    }
  }

  async hydrateProductIndex() {
    const response: RepositoryResponse = await this.count({});
    if (response.status === 200 && response.payload < 1) {
      this.hydrateIndex(productSamples);
    }
  }

  async generateCatalogue(sellerid) {
    let meta = [];
    let categoriesPosition = {};
    let collectionsPosition = {};
    let cardsPosition = {};

    try {
      const productAggResponse = await this.nestedAggTopHits([{ name: "seller.id", value: sellerid }], "category.id", "collection.id", "product");

      if (productAggResponse.status !== 200) {
        return productAggResponse;
      }

      const result = productAggResponse.payload.aggregations.primary.buckets.map(category => {
        meta.push(category.key);
        return {
          id: category.key,
          total: category.doc_count,
          order: categoriesPosition[category.key] || (category.doc_count + 1),
          collections: category.secondary.buckets.map(collection => {
            meta.push(collection.key);
            return {
              id: collection.key,
              total: collection.doc_count,
              order: collectionsPosition[collection.key] || (collection.doc_count + 1),
              cards: collection.toplisthits.hits.hits.map(({ _source, _id }) => {
                console.log("_source.recipes LOG", _source.recipes);
                return {
                  __typename: "Product",
                  id: _id,
                  primary: _source.primary,
                  secondary: _source.secondary,
                  tertiary: _source.tertiary,
                  quaternary: _source.quaternary,
                  cardType: _source.cardType,
                  order: cardsPosition[_id] || (collection.doc_count + 1),
                  name: _source.name,
                  price: _source.price,
                  currency: _source.currency,
                  recipes: _source.recipes,
                  src: _source.src,
                  stock: _source.stock,
                  discount: _source.discount,
                  quantity: _source.quantity,
                  size: _source.size,
                  spicy: _source.spicy,
                  ranking: _source.ranking
                }
              })
            }
          })
        }
      });

      const fullMeta = await this.mget({ ids: meta, index: 'meta', parser: 'toKeyValue' });
      console.log("FULLMETA LOG", fullMeta);
      const catalogue = result.sort((x, y) => x.order - y.order).map((category, catKey) => {
        return {
          id: category.id,
          total: category.total,
          header: {
            label: fullMeta[category.id] && fullMeta[category.id].name,
          },
          order: catKey + 1,
          sections: category.collections.sort((x, y) => x.order - y.order).map((collection, colKey) => {
            return {
              id: collection.id,
              total: collection.total,
              order: colKey + 1,
              header: {
                label: fullMeta[collection.id] && fullMeta[collection.id].name,
                sublabel: `${collection.total} ${collection.total > 1 ? 'variétés' : 'variété'}`
              },
              cardComponent: {
                type: fullMeta[collection.id] && fullMeta[collection.id].cardType
              },
              cards: collection.cards.sort((x, y) => x.order - y.order).map((card, cardKey) => ({
                ...card,
                order: cardKey + 1,
              })),
            }
          })
        }
      });

      return {
        status: 200,
        payload: catalogue,
        error: "NONE",
      }
    } catch (e) {
      console.log(e);
      return {
        status: 500,
        payload: false,
        error: "INTERNAL_ERROR",
      }
    }
  }

  async generateCatalogue_old(sellerid) {
    try {
      const productCategoriesResponse = await this.aggByField({ criteria: [{ name: "seller.id", value: sellerid }], index: "product", fieldname: "category.id" });

      if (productCategoriesResponse.status !== 200) {
        return productCategoriesResponse;
      }
      //productCategoriesResponse.payload.map(category => );
      let positionstate = [];
      let meta = [];
      let categories = [];
      let categoriesState = [];
      const response = await this.nestedAggTopHits([{ name: "seller.id", value: sellerid }], "category.id", "collection.id", "product");
      const items = response.payload &&
        response.payload.aggregations &&
        response.payload.aggregations.primary.buckets.flatMap((primaryItem, key) => {
          meta.push(primaryItem.key);
          categories.push(primaryItem.key)
          return {
            id: primaryItem.key,
            sections: primaryItem.secondary.buckets.map((secondaryItem) => {
              const collectionId = secondaryItem.toplisthits.hits.hits[0]._source.collection.id;
              const collectionState: any = positionstate.filter(col => col.id === collectionId);
              meta.push(secondaryItem.key);
              return {
                id: secondaryItem.key,
                order: (collectionState[0] && collectionState[0].order) || 1000,
                sellerid: sellerid,
                screen: primaryItem.key,
                total: secondaryItem.doc_count,
                cards: secondaryItem.toplisthits.hits.hits.map(({ _source, _id }) => {
                  return {
                    id: _id,
                    primary: _source.primary,
                    secondary: _source.secondary,
                    tertiary: _source.tertiary,
                    quaternary: _source.quaternary,
                    cardType: _source.cardType,
                    name: _source.name,
                    price: _source.price,
                    currency: _source.currency,
                    recipes: _source.recipes,
                    src: _source.avatar,
                    stock: _source.stock,
                    discount: _source.discount,
                    quantity: _source.quantity,
                    size: _source.size,
                    spicy: _source.spicy,
                    ranking: _source.ranking,
                    __typename: _source.__typename,
                  }
                })
              };
            })
          }
        });
      const fullMeta = await this.mget({ ids: meta, index: 'meta', parser: 'toKeyValue' });
      const tmpcat = categories.map(id => {
        const catState = categoriesState.filter(categoryState => categoryState.id === id)[0];
        return {
          id,
          order: (catState && catState.order) || 1000,
          name: fullMeta[id] && fullMeta[id].name
        }
      });

      const sections = items.sort((x, y) => x.order - y.order).map((section, order) => ({
        ...section,
        header: {
          label: fullMeta[section.id] && fullMeta[section.id].name,
          sublabel: `${section.total} ${section.total > 1 ? 'variétés' : 'variété'}`
        },
        cardComponent: {
          type: fullMeta[section.id] && fullMeta[section.id].attributes.filter(m => m.name === "cardType")[0].value
        },
        order: order + 1
      }
      ));
      const CATALOGUE_CATEGORIES = tmpcat.sort((x, y) => x.order - y.order).map((category, key) => ({ ...category, order: key + 1 }));

      return {
        status: 200,
        payload: { sections, CATALOGUE_CATEGORIES },
        error: "NONE",
      }
    } catch (e) {
      console.log(e);
      return {
        status: 500,
        payload: false,
        error: "INTERNAL_ERROR",
      }
    }
  }

  async deleteMultiple(_index, ids: any = []) {
    return ids.flatMap(_id => [{ delete: { _index, _id } }])
  }

  async purge({ ids }) {
    try {
      const productsResponse = await this.mget({
        ids,
        fields: ["pictures"],
        parser: "toPictureIds"
      });

      if (productsResponse.status !== 200) {
        return productsResponse;
      }

      if (Array.isArray(productsResponse.payload) && productsResponse.payload.length > 0) {
        await cloudinary.api.delete_resources(productsResponse.payload);
      }

      const commits = await this.deleteMultiple("product", ids);

      const deleteResponse = await this.bulkAction({ records: commits });

      if (deleteResponse.status !== 200) {
        return deleteResponse;
      }

      //return await this.refreshCatalogue(catalogueToRefresh);

    } catch (e) {
      return {
        status: 500,
        error: "FAILED_TO_DELETE",
        payload: null
      }
    }
  }
}

export default new ProductStore();
