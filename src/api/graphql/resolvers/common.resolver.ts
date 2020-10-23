import { ApolloError } from "apollo-server";
import PageRepository from "../../../services/template/page/tpage.repository";
import ServiceMap from "./common.service.map";
import ProductStore from "../../../services/product/product.service";
import QRCodeService from "../../../services/qrcode/qrcode.service";
import httpCodes from "../../../utils/http.codes";

export const CommonQuery = {
  getCard: async (root, { id, model }) => {
    const response = await ServiceMap[model].service.get({id});

    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },

  searchMeta: async (root, { model, type, q }) => {
    const { service, index } = ServiceMap[model];
    const response = await service[type]({ index, q, field: "label" });

    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },

  getMetaList: async (root, { model, parentID, customSearchInput }) => {
    const { service, index } = ServiceMap[model];
    const response = await service.getList({ index, parentID });

    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },

  getMeta: async (root, { model, id }) => {
    const { service, index } = ServiceMap[model];
    const response = await service.get({ index, id });

    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },

  aggModelByField: async (root, { model, ...rest }) => {
    const { service, index } = ServiceMap[model];
    const response = await service.aggByField({
      index,
      ...rest
    });
    console.log("response LOG getMeta", response.payload);
    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },

  getRootMeta: async (root, { id, model }) => {
    const response = await ServiceMap["Meta"].service.aggByField({id});

    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },
};

export const CommonMutation = {
  uploadPictures: async (root, { model, ...rest }) => {
    const response = await ServiceMap["GALLERY"].service.addPictures({ model: ServiceMap[model].index, ...rest });

    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },

  deletePictures: async (root, { model, ...rest }) => {
    const response = await ServiceMap["GALLERY"].service.deletePictures({ model: ServiceMap[model].index, ...rest });

    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },

  setAvatar: async (root, { model, ...rest }) => {
    const response = await ServiceMap["GALLERY"].service.setAvatar({ model: ServiceMap[model].index, ...rest });

    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },

  deleteEntities: async (root, args) => {
    const response = await ServiceMap[args.model].service.deleteEntities({ model: ServiceMap[args.model].index, modelIds: args.modelIds, catalogueToRefresh: args.catalogueToRefresh });

    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },

  uploadPicture: async (root, { model, ...rest}) => {
    const { service } = ServiceMap["GALLERY"];
    const index = ServiceMap[model].index;
    const response = await service.addPicture({index, ...rest});

    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(httpCodes[response.status], String(response.status));
  },

  generateQRCode: async (root, { model, modelId }) => {
    const response = await ServiceMap[model].service.addQRCode(modelId);

    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(httpCodes[response.status], String(response.status));
  },

  addMeta: async (root, { meta } ) => {
    const { service } = ServiceMap["META"];
    const response = await service.addMeta(meta);

    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, String(response.status));
  }
};
