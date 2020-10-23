import { ApolloError } from "apollo-server";
import PageRepository from "../../../services/template/page/tpage.repository";


export const PageQuery = {
  getPage: async (root, args) => {
    const response = await PageRepository.search(args);
    console.log("getPage LOG", response);
    if (response.status === 200) {
      return response.payload.data;
    }
    return new ApolloError(response.error, String(response.status));
  },

  getSectionTab: async (root, args) => {
    const response = await PageRepository.search(args);
    console.log("getPage LOG", response);
    if (response.status === 200) {
      return response.payload.data;
    }
    return new ApolloError(response.error, String(response.status));
  },
};

export const PageMutation = {

};
