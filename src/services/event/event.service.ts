import eventMapping from "./event.mapping";
import { ElasticService } from "../elastic/elastic.service";
import { Uploader } from "../uploader/upload.service";

export class EventStore extends ElasticService {
  uploader = new Uploader();
  constructor() {
    super("event", eventMapping);
  }

  async addEventToPlace(event) {
    return await this.add({
      record: event,
      options: {
        ranking: true
      }
    });
  }

  async addPictures(eventid, pictures) {

    try {
      const upload = await this.uploader.upload(pictures);
      if (upload.status === 200) {
        const commits = await this.uploader.commitToElastic(
          "event",
          eventid,
          upload.payload
        );
        const response = await this.bulkAction(commits);
        return response;
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
}

export default new EventStore();
