import { ApolloError } from "apollo-server";
import PlaceStore from "../../../services/place/place.service";
import ProductStore from "../../../services/product/product.service";
import LinkProfilePlaceStore from "../../../services/user/profile.link.place.service";

export const PlaceQuery = {
  searchPlace: async (root, args, { status, error, payload }) => {
    /*if (status === 401) {
      return new ApolloError(error, status);
    }*/
    const response = await PlaceStore.search(args);

    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },

  getPlace: async (root, args) => {
    const response = await PlaceStore.retrieve(args);

    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },

  aggPlaceByField: async (root, args) => {
    const response = await PlaceStore.aggByField({ criteria: args.criteria, fieldname: args.fieldname});
    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, String(response.status));
  },

  aggPlaceByZone: async (root, args) => {
    const response = await PlaceStore.nestedAggByField([], "location.zone", "location.district");
    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, String(response.status));
  },

  getUsersByLike: async (parent, params) => {
    const { placeid } = params;
    const response = await LinkProfilePlaceStore.getLinksByPlace(placeid);

    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },

};

export const PlaceMutation = {
  createPlace: async (root, args) => {
    const response = await PlaceStore.add({ 
      record: args.place,
      options: {
        ranking: true
      } 
    });

    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },

  updatePlace: async (root, args) => {
    const response = await PlaceStore.update({id: args.id, record: args.place });
    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },

  deletePlace: async (root, args) => {
    const response = await PlaceStore.delete(args.placeid);
    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },

  uploadPicturesPlace: async (parent, params) => {
    const { placeid, pictures } = params;
    const response = await PlaceStore.addPictures(placeid, pictures);

    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },

  addProductToPlace: async (parent, params) => {
    const { placeid, product } = params;
    const response = await PlaceStore.addProduct(placeid, product);
    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },

  refreshCollectionFromCatalogue: async (root, args) => {
    const response = await PlaceStore.refreshCollectionFromCatalogue(args.collection);

    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, String(response.status));
  },

  // updateCatalogueOrder: async (parent, args) => {
  //   const response = await PlaceStore.updateCatalogueOrder(args);
  //   console.log("response", response.payload);
  //   if (response.status === 200) {
  //     return true;
  //   }
  //   return new ApolloError(response.error, response.status);
  // },

  updateCategoriesOrder: async (parent, args) => {
    const response = await PlaceStore.updateCategoriesOrder(args);

    if (response.status === 200) {
      return true;
    }
    return new ApolloError(response.error, response.status);
  },

  setProductCategories: async (parent, args) => {
    const response = await PlaceStore.cloneProductCategories(args);

    if (response.status === 200) {
      return true;
    }
    return new ApolloError(response.error, String(response.status));
  },

  refreshCatalogue: async (parent, params) => {
    const response = await PlaceStore.refreshCatalogue(params);
    console.log("refreshCatalogue", response.payload);
    if (response.status === 200) {
      return response.payload.catalogue;
    }
    return new ApolloError(response.error, String(response.status));
  },
};
