import { ElasticService } from "../elastic/elastic.service";
import catalogueMapping from "./catalogue.mapping";
import ProductStore from "../product/product.service";

class CatalogueService extends ElasticService {
  productStore = ProductStore;
  constructor() {
    super("catalogue", catalogueMapping);
  }

  async retrieve({ sellerid }) {
    const response = await this.get({ id: sellerid });
    if (response.status === 404) {
      return this.refreshCatalogue({ sellerid });
    }
    return response;
  }

  sortCatalogue(catalogue = []) {
    return catalogue
      .sort((x, y) => x.position - y.position)
      .map(section => {
        if (section.cards) {
          section.cards = section.cards.sort((u, v) => u.position - v.position);
        }
        return section;
      });
  }

  async updateCollection(params) {
    const totalCollectionResponse = await this.count({ criteria: [{ name: "sellerid", value: params.sellerid }] });
    if (totalCollectionResponse.status !== 200) {
      return totalCollectionResponse;
    }

    if (totalCollectionResponse.payload === 0) {

    }

    console.log("totalCollection LOG", totalCollectionResponse.payload);
    return {
      status: 200,
      payload: true,
      error: "NONE"
    };
  }

  async refreshCatalogue({ sellerid }) {
    const response = await this.get({ id: sellerid });
    console.log("get Response", response);
    const catalogueResponse = await this.productStore.generateCatalogue(sellerid);

    if (catalogueResponse.status !== 200) {
      return catalogueResponse;
    }

    return this.update({
      id: sellerid,
      record: catalogueResponse.payload,
      fields: ["sections", "CATALOGUE_CATEGORIES"],
      parser: 'toReturnRecord'
    });
  }

  async cloneProductCategories({ sellerid }) {
    try {
      const currentCategoriesResponse = await this.get({ id: sellerid, fields: ["CATALOGUE_CATEGORIES"] });
      //console.log("placeCategoriesResponse LOG", placeCategoriesResponse.payload);
      // Retrieve CATALOGUE_CATEGORIES FROM CATALOGUE index ===> position
      // if (currentCategoriesResponse.status !== 200) {
      //   return currentCategoriesResponse;
      // }
      // RETRIEVE CATEGORIES FROM PRODUCT index ===> refresh categories
      const productCategoriesResponse = await this.aggByField({ criteria: [{ name: "seller.id", value: sellerid }], index: "product", fieldname: "category.id" });
      //console.log("productCategoriesResponse LOG", productCategoriesResponse);
      if (productCategoriesResponse.status !== 200) {
        return productCategoriesResponse;
      }
      // RETRIEVE CATEGORIES FROM META index ===> get full categories name & id
      const metaCategoriesResponse = await this.mget({ ids: productCategoriesResponse.payload.map(category => category.name), index: "meta" });
      //console.log("metaCategoriesResponse response LOG", metaCategoriesResponse.payload.data);
      if (metaCategoriesResponse.status !== 200) {
        return metaCategoriesResponse;
      }
      console.log("metaCategoriesResponse LOG", metaCategoriesResponse);
      const { CATALOGUE_CATEGORIES } = currentCategoriesResponse.payload || [];
      //console.log("CATALOGUE_CATEGORIES", CATALOGUE_CATEGORIES);
      const categories = metaCategoriesResponse.payload.data.map(category => {
        const collectionState: any = CATALOGUE_CATEGORIES && Array.isArray(CATALOGUE_CATEGORIES) ? CATALOGUE_CATEGORIES.filter(cat => cat.id === category.id) : [];
        return {
          name: category.name,
          id: category.id,
          order: collectionState[0] && collectionState[0].order || 1000
        }
      }).sort((x, y) => x.order - y.order).map((category, order) => ({ ...category, order: order + 1 }));

      console.log("categories LOG", categories);

      const updateResponse = await this.update({ id: sellerid, record: { CATALOGUE_CATEGORIES: categories } });

      return {
        status: 200,
        error: "NONE",
        payload: true
      }
    } catch (e) {
      console.log("INTERNAL_ERROR", e);
      return {
        status: 500,
        error: "INTERNAL_ERROR",
        payload: false
      }
    }
  }

  async updateCatalogueOrder(params) {
    const updateResponse = await this.update({ id: params.sellerid, record: { CATALOGUE_ORDER: params.order } });

    if (updateResponse.status === 200 && updateResponse.payload) {
      return await this.refreshCatalogue({ sellerid: params.sellerid });
    } else {
      return updateResponse;
    }
  }

  updateCategoriesOrder(params) {
    return this.update({ id: params.sellerid, record: { CATALOGUE_CATEGORIES: params.order } });
  }
}

export default new CatalogueService();