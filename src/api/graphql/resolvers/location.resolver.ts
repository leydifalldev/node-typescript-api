import { ApolloError } from "apollo-server";
import LocationRepository from "../../../services/location/location.repository";

export const LocationQuery = {
  searchLocations: async (root, args) => {
    const response = await LocationRepository.search(args);
    console.log(response.payload.data);
    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, String(response.status));
  },

  getLocations: async (root, args) => {
    const response = await LocationRepository.search(args);
    console.log(response.payload.data);
    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, String(response.status));
  },
}
