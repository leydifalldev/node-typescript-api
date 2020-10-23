import { ApolloError } from "apollo-server";
import TemplateRepository from "../../../services/template/template.repository";


export const TemplateQuery = {
  getInputOptions: async(root, args) => {
    const response = await TemplateRepository.getInputOptions(args.model, args.input);
    console.log("searchProduct LOG", response);
    if (response.status === 200) {
      return response.payload.data;
    }
    return new ApolloError(response.error, response.status);
  },

  hydrate: async(root, args) => {
    const response = await TemplateRepository.hydrateAllTemplates();
    console.log("searchProduct LOG", response);
    return true;
  },

  searchLayout: async (root, args) => {
    const response = await TemplateRepository.searchLayout(args);
    if (response.status === 200) {
      return response.payload.data;
    }
    return new ApolloError(response.error, String(response.status));
  },
}

export const TemplateMutation = {
  addTCollection: async(root, args) => {
    const response = await TemplateRepository.createUniqByName({input: "collection", ...args.tcollection});
    console.log("addTCollection", response);
    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },

  addTCategory: async(root, args) => {
    const response = await TemplateRepository.createUniqByName({input: "category", ...args.tcategory});
    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },

  addTIngredient: async(root, args) => {
    const response = await TemplateRepository.createUniqByName({input: "ingredient", ...args.tingredient});
    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },
  
  addTSize: async(root, args) => {
    const response = await TemplateRepository.createUniqByName({input: "size", ...args.tsize});
    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },

  addTSpicy: async(root, args) => {
    const response = await TemplateRepository.createUniqByName({input: "spicy", ...args.tspicy});
    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },

  addTRole: async(root, args) => {
    const response = await TemplateRepository.createUniqByName({input: "role", ...args.trole});
    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },

  addTRecipe: async(root, args) => {
    const response = await TemplateRepository.createUniqByName({input: "recipe", ...args.trecipe});
    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },

  addTGastronomy: async(root, args) => {
    const response = await TemplateRepository.createUniqByName({input: "gastronomy", ...args.tgastronomy});
    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },

  addTSection: async(root, args) => {
    const response = await TemplateRepository.createUniqByName({input: "section", ...args.tsection});
    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },

  addTLayout: async(root, args) => {
    const response = await TemplateRepository.createUniqByName({input: "layout", ...args.tlayout});
    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  }
}