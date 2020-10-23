import placeMapping from "./place.mapping";
import placeSamples from "./place.sample";
import { ElasticService } from "../elastic/elastic.service";
import { Uploader } from "../uploader/upload.service";
import ProductStore from "../product/product.service";
import { RepositoryResponse } from "../../defs";
import placeSample from "./place.sample";
import QRCodeService from "../../services/qrcode/qrcode.service";

class PlaceStore extends ElasticService {
  uploader = new Uploader();
  QRGenerator = QRCodeService
  productStore = ProductStore;
  constructor() {
    super("place", placeMapping);
    this.once("place_mapping_done", () => this.hydratePlaceIndex());
  }

  async retrieve(params) {
    const response = await this.get(params);
    let place = {};

    if (response.status !== 200) {
      return response;
    }

    place = response.payload;
    const catalogue = response.payload.catalogue;

    if (!catalogue || (Array.isArray(catalogue) && catalogue.length === 0)) {
      const catalogueResponse = await this.refreshCatalogue({ sellerid: params.id });
      
      if (catalogueResponse.status !== 200) {
        return catalogueResponse
      }

      place = {...place, ...catalogueResponse.payload};
    }

    return { status: 200, error: "NONE", payload: place};
  }

  getProductsCategories(params) {
    const { criteria, size, from, q } = params;
    return this.search({
      body: {
        query: {
          bool: {
            must: this.buildTerms(criteria)
          }
        }
      },
      q,
      size: size || 10,
      from: from || 0
    });
  }

  async addPictures(placeid, pictures) {
    try {
      const upload = await this.uploader.upload(pictures);
      if (upload.status === 200) {
        const commits = await this.uploader.commitToElastic(
          "place",
          placeid,
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

  async addProduct(placeid, product) {
    try {
      const placeResponse = await this.get({ id: placeid });
      if (placeResponse.status === 200) {
        const {
          payload: {
            id,
            name,
            logo,
            contact,
            ranking,
            location: { address, zone, country, ocean }
          }
        } = placeResponse;
        const record = {
          ...product,
          place: { id, name, ...contact, ranking, location, zone, ocean, country, logo }
        };
        const response = await this.productStore.add(record);
        console.log("response addProduct", response);
        return response;
      }
      return placeResponse;
    } catch (e) {
      console.log(e);
      return {
        status: 500,
        error: "FAILED TO ADD PICTURE",
        payload: false
      };
    }
  }

  async getUserByLike(placeid) {
    const req = {
      criteria: [
        {
          name: "placeid",
          value: placeid
        }
      ]
    };

    return await this.search(req);
  }

  async hydratePlaceIndex() {
    const response: RepositoryResponse = await this.count({});
    if (response.status === 200 && response.payload < 1) {
      await this.hydrateIndex(placeSamples);
    }
  }

  async refreshCollectionFromCatalogue(collection) {
    const request = {
      index: this.index,
      id: collection.sellerid,
      body: {
        script: {
          source:
            "if (!ctx._source.containsKey('catalogue')){ ctx._source.catalogue=new ArrayList(); }" +
            "if(ctx._source.catalogue.size() > 0) { def targetCollection = ctx._source.catalogue.find(collection -> collection.name == params.record.name);}" +
            "ctx._source.catalogue.add(params.record);" +
            "ctx._source.LAST_UPDATE_DATE = params.now;",
          lang: "painless",
          params: {
            record: collection,
            now: new Date()
          }
        },
      }
    }
    try {
      const response = await this.esclient.update(request);

      return {
        status: 200,
        payload: true,
        error: "NONE"
      }
    } catch (e) {
      console.log(e.meta.body.error);
      return {
        status: 500,
        payload: true,
        error: "NONE"
      }
    }
  }

  async cloneProductCategories({ placeid }) {
    try {
      const placeCategoriesResponse = await this.get({ id: placeid, fields: ["CATALOGUE_CATEGORIES"] });
      // Retrieve CATALOGUE_CATEGORIES FROM PLACE index ===> position
      if (placeCategoriesResponse.status !== 200) {
        return placeCategoriesResponse;
      }
      // RETRIEVE CATEGORIES FROM PRODUCT index ===> refresh categories
      const productCategoriesResponse = await this.aggByField({ criteria: [{ name: "seller.id", value: placeid }], index: "product", fieldname: "category.id" });
      if (productCategoriesResponse.status !== 200) {
        return productCategoriesResponse;
      }
      // RETRIEVE CATEGORIES FROM META index ===> get full categories name & id
      const metaCategoriesResponse = await this.mget({ ids: productCategoriesResponse.payload.map(category => category.name), index: "meta" });
      if (metaCategoriesResponse.status !== 200) {
        return metaCategoriesResponse;
      }
      const { CATALOGUE_CATEGORIES } = placeCategoriesResponse.payload;
      const categories = metaCategoriesResponse.payload.data.map(category => {
        const collectionState: any = CATALOGUE_CATEGORIES && Array.isArray(CATALOGUE_CATEGORIES) ? CATALOGUE_CATEGORIES.filter(cat => cat.id === category.id) : [];
        return {
          name: category.name,
          id: category.id,
          order: collectionState[0] && collectionState[0].order || 1000
        }
      }).sort((x, y) => x.order - y.order).map((category, order) => ({ ...category, order: order + 1 }));

      const updateResponse = await this.update({id: placeid, record: { CATALOGUE_CATEGORIES: categories }});
      //console.log("categories LOG", updateResponse);
      return {
        status: 200,
        error: "NONE",
        payload: true
      }
    } catch (e) {
      return {
        status: 500,
        error: "INTERNAL_ERROR",
        payload: false
      }
    }
  }

  // async updateCatalogueOrder(params) {
  //   console.log("updateCatalogueOrder", params)
  //   const updateResponse = await this.update(params.sellerid, { CATALOGUE_ORDER: params.order });

  //   if (updateResponse.status === 200 && updateResponse.payload) {
  //     return await this.refreshCatalogue({ sellerid: params.sellerid });
  //   } else {
  //     return updateResponse;
  //   }
  // }

  updateCategoriesOrder(params) {
    return this.update({
      id: params.sellerid,
      record: { CATALOGUE_CATEGORIES: params.order }
    });
  }

  async refreshCatalogue({ sellerid }) {
    const catalogueResponse = await this.productStore.generateCatalogue(sellerid);

    if (catalogueResponse.status !== 200) {
      return catalogueResponse;
    }

    return this.update({
      id: sellerid,
      record: { catalogue: catalogueResponse.payload },
      fields: ["catalogue"],
      parser: 'toReturnRecord'
    });
  }

  async addQRCode(id) {
    try {
      const result = await this.QRGenerator.generateAndUpload("place", id);

      const placeResponse = await this.get({ 
        id,
        fields: ["qrcode"]
      });

      const { payload: place } = placeResponse;

      if (place.qrcode) {
        await this.uploader.deletePictureFromCloudinary(id);
      }

      const { payload } = result;

      await this.update({
        id,
        record: { qrcode: payload }
      })

      return {
        status: 200,
        payload: payload.desktop
      };
    } catch(e) {
      return {
        status: 500,
        payload: null
      }
    }
  }

}

export default new PlaceStore();
