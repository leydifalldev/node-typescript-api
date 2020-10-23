import { ApolloError } from "apollo-server";
import httpCodes from "../../../utils/http.codes";
import CatColRepository from "../../../services/catcol/catcol.repository";

export const CatColQuery = {

}

export const CatColMutation = {
  addCatCol: async (root, args) => {
    console.log("addCatCol", args);
    const response = await CatColRepository.slugifyAndCreate(args.catcol);

    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(httpCodes[response.status], response.status);
  },
}
