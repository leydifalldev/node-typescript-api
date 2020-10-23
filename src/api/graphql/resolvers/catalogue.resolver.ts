import { ApolloError } from "apollo-server";
import CatalogueService from "../../../services/catalogue/catalogue.service";

export const CatalogueQuery = {
  getCatalogue: async (root, args) => {
    const response = await CatalogueService.retrieve(args);
    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },
}

export const CatalogueMutation = {
  updateCollection: async (root, args) => {
    const response = await CatalogueService.updateCollection(args);

    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, String(response.status));
  },

}
