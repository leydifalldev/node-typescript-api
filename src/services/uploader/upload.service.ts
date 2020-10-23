import cloudinary from "./cloudinary.config";
import { formatConfig } from "./format.config";
import { ElasticService } from "../elastic/elastic.service";
import galleryMapping from "./gallery.mapping";
import { IMetaPicture, IPictureCommit } from "./cloudinary.defs";
import Logger from "../logger/logger.service";

export class Uploader extends ElasticService {
  logger: typeof Logger;
  static fieldName = "uploader";

  constructor() {
    super("gallery", galleryMapping);
    this.logger = Logger
    //this.once("product_mapping_done", () => this.hydrateProductIndex());
  }

  async addPictures({ model, id, pictures, formatType }) {
    try {
      const upload = await this.upload(pictures, formatType);
      if (upload.status === 200) {
        return this.saveToElastic(model, id, upload.payload);
      }
      return upload;
    } catch (e) {
      console.log("FAILED TO ADD PICTURE =====> ", e);
      return {
        status: 500,
        error: "FAILED TO ADD PICTURE",
        payload: false
      };
    }
  }

  deletePictureFromCloudinary(pictureId) {
    return cloudinary.api.delete_resources(pictureId);;
  }

  async deletePictures({ model, modelId, picturesIds = [] }) {
    try {
      const cloudinaryResponse = await cloudinary.api.delete_resources(picturesIds);
      let success = true;
      picturesIds.map(pictureId => {
        if (cloudinaryResponse.deleted[pictureId] !== "deleted") {
          success = false
        }
      });

      return this.removeLinksfromModel(model, modelId, picturesIds);
    } catch (e) {
      console.log("FAILED TO DELETE PICTURES =====> ", e);
      return {
        status: 500,
        error: "FAILED TO DELETE PICTURES",
        payload: false
      };
    }
  }

  async removeLinksfromModel(model, modelId, picturesIds) {
    const response = await this.get({
      index: model,
      id: modelId,
      fields: ["pictures"]
    });

    if (response.status !== 200) {
      return response;
    }

    const { pictures } = response.payload;

    const filtered = pictures.filter((picture => !picturesIds.includes(picture.id)));
    return this.update({
      index: model,
      id: modelId,
      record: { pictures: filtered },
      parser: "toBoolResponse"
    });
  }

  async upload(pictures, formatType = "LargeCardM") {
    try {
      const streamPromises = pictures.map(p => this.pushToCloudinary(p));
      const pLinks = await Promise.all(streamPromises);
      const links = pLinks.map((pLink: any) => {
        const record = {}
        record["mobile"] = pLink.eager[0].secure_url;
        record["desktop"] = pLink.eager[0].secure_url;
        record["id"] = pLink.public_id;
        record["format"] = formatType;
        record["provider"] = "Cloudinary";
        record["CREATED_AT"] = pLink.created_at
        return record;
      });

      return {
        status: 200,
        error: false,
        payload: links
      };
    } catch (e) {
      console.log("Failed: Push image to server =====> ", e);
      return {
        status: 500,
        error: "FAILED TO CONNECT TO MEDIA SERVER",
        payload: null
      };
    }
  }

  async pushToCloudinary(picture) {
    return new Promise(async (resolve, reject) => {
      try {
        const { createReadStream } = await picture;
        const eager = formatConfig;
        createReadStream().pipe(
          cloudinary.uploader.upload_stream(
            { tags: "basic_sample", eager },
            (error, result) => {
              if (error) {
                reject(error);
              }
              resolve(result);
            },
            { "resource_type": "auto", quality: 100 }
          )
        );
      } catch (e) {
        return {
          status: e.statusCode,
          error: "Upload error",
          payload: "NONE"
        };
      }
    });
  }

  async pushStreamToCloudinary(stream) {
    return new Promise(async (resolve, reject) => {
      try {
        const eager = formatConfig;
        console.log("RESULT", stream);
        stream.pipe(
          cloudinary.uploader.upload_stream(
            { tags: "basic_sample", eager },
            (error, result) => {
              if (error) {
                reject(error);
              }
              
              resolve(result);
            },
            { "resource_type": "auto", quality: 100 }
          )
        );
      } catch (e) {
        return {
          status: e.statusCode,
          payload: null
        };
      }
    })
  }

  commitToElastic(index, docId, records) {
    const fieldName = "pictures";
    console.log("records", records);
    const source =
      "if (!ctx._source.containsKey('" +
      fieldName +
      "')) {ctx._source." +
      fieldName +
      "= new ArrayList();} ctx._source." +
      fieldName +
      ".addAll(params.records); ctx._source.LAST_UPDATE_DATE = params.now;";
    let commits = [];
    const params = {
      records: records,
      now: new Date()
    };
    const commit = {};
    commit["refresh"] = true;
    commit["body"] = [
      { update: { _index: index, _id: docId } },
      { script: { source, params, lang: "painless" }, scripted_upsert: true }
    ];
    //commits.push(commit);
    console.log("index LOG", index);
    return commit;
  }

  async saveToElastic(model: string, modelId: string, records: any) {
    try {
      console.log("modelId LOG", modelId);
      const response = await this.get({ index: model, id: modelId, fields: ["src", "pictures"] });
      console.log("saveToElastic LOG", response);
      const { src, pictures = [] } = response.payload;
      let srcTmp = src;
      const tmp = [...pictures, ...records];

      if (!src) {
        tmp[0] = { ...tmp[0], main: true };
        srcTmp = records[0].mobile;
      }
      const updateResponse = await this.update({
        index: model,
        id: modelId,
        record: { src: srcTmp, pictures: tmp }
      });

      return updateResponse;
    } catch (e) {
      const deletePictureResponse = await this.deletePictures({
        model,
        modelId,
        picturesIds: records.map(record => record.id)
      });

      return {
        status: 500,
        payload: null,
        error: "FAILED_TO_SAVE_IMAGE"
      }
    }
  }

  async setAvatar({ model, modelId, pictureId }) {
    try {
      const response = await this.get({ index: model, id: modelId, fields: ["pictures", "src"] });

      const { src, pictures = [] } = response.payload;
      let srcTmp = null;

      const tmp = pictures.map(picture => {
        if (picture.id === pictureId) {
          srcTmp = picture.mobile
        }
        return { ...picture, main: picture.id === pictureId }
      });

      const updateResponse = await this.update({
        index: model,
        id: modelId,
        record: { src: srcTmp, pictures: tmp }
      });

      console.log("tpm ====> ", tmp);
      return updateResponse;
    } catch (e) {
      return {
        status: 500,
        payload: null,
        error: "FAILED_TO_CHANGE_src"
      }
    }
  }

  async addPicture(params:any) {
    console.log("params", params);
    const { index, id, picture, field } = params;

    try {
      const response = await this.get({ index, id, fields: [field] });
      const { payload, status } = response;

      if (status !== 200) {
        return response
      }
  
      if (payload[field]) {
        await this.deletePictureFromCloudinary(payload[field].id);
      }

      const upload = await this.upload([picture]);
      console.log("upload LOG", upload);
      if (upload.status === 200) {
        return this.savePictureToElastic({ 
          index, 
          id, 
          field, 
          metaPicture: upload.payload[0]
        });
      }
      return upload;

    } catch(e) {
      return this.logger.error({
        moduleType: "Service",
        module: "UploadService",
        error: e,
      });
    }
  }
  
  async savePictureToElastic(params: IPictureCommit) {
    const { index, id, field, metaPicture } = params;
    const record = {};
    record[field] = metaPicture;

    try {
      const updateResponse = await this.update({
        index,
        id,
        record
      });

      return updateResponse;
    } catch(e) {
      return this.logger.error({ 
        moduleType: "UploadService", 
        module: "Service",
        error: e
      });
    }
  }

}
