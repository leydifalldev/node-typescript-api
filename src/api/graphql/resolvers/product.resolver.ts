import { ApolloError } from "apollo-server";
import ProductStore from "../../../services/product/product.service";

export const ProductQuery = {
  searchProduct: async (root, args) => {
    const response = await ProductStore.search(args);
    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },

  getProduct: async (root, { id }) => {
    const response = await ProductStore.get({id});
    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },

  getProductAgg: async (root, args) => {
    const { placeid } = args;
    const response = await ProductStore.getGroup(placeid);
    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, String(response.status));
  },

  aggProductByField: async (root, args) => {
    const response = await ProductStore.nestedAggByField([], "category", "collection");
    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, String(response.status));
  },

  aggProductByNestedField: async (root, args) => {
    const response = await ProductStore.nestedAggByField(args.criteria, args.parentField, args.childField);
    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, String(response.status));
  },

  groupProductByField: async (root, args) => {
    const response = await ProductStore.aggTopHits(args);

    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, String(response.status));
  },

};

export const ProductMutation = {
  createProduct: async (root, args) => {
    const response = await ProductStore.addToSellerCollection(args.product);
    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, String(response.status));
  },

  updateProduct: async (root, args) => {
    const response = await ProductStore.updateProduct(args);

    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },

  uploadPicturesProduct: async (root, params) => {
    const response = await ProductStore.addPictures(params);

    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },
  deleteProduct: async (root, args) => {
    const response = await ProductStore.purge(args);

    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },
};
