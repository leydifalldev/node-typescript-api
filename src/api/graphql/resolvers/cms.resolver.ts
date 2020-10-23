import { ApolloError } from "apollo-server";
import CmsService from "../../../services/cms/page/page.service";

export const CmsQuery = {
  getCMSProducts: async (root, args) => {
    const response = await CmsService.getProducts(args);

    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, String(response.status));
  },

  getCMSPlaces: async (root, args) => {
    const response = await CmsService.getPlaces(args);

    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, String(response.status));
  },

  getPageModel: async (root, args) => {
    const response = await CmsService.search(args);

    if (response.status === 200) {
      return response.payload.data;
    }
    return new ApolloError(response.error, String(response.status));
  },

  getCmsPage: async (root, args) => {
    const response = await CmsService.getPage(args);

    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, String(response.status));
  },
}

export const CmsMutation = {
}
