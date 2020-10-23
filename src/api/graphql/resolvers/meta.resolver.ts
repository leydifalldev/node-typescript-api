import { ApolloError } from "apollo-server";
import MetaRepository from "../../../services/meta/meta.repository";

export const MetaQuery = {
}

export const MetaMutation = {
  deleteMeta: async (root, { ids } ) => {
    const response = await MetaRepository.deleteMeta(ids);

    if (response.status === 200) {
      return response.payload;
    }

    return new ApolloError(response.error, String(response.status));
  }
}