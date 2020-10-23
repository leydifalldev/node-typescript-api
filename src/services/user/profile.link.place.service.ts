import linkProfilePlaceMapping from "./profile.link.place.mapping";
import { ElasticService } from "../elastic/elastic.service";
import { serializeLikesLink, serializeLikesEntity, serializeNotationLink, serializeNotationEntity } from "../link";

export class LinkProfilePlaceStore extends ElasticService {
  constructor() {
    const index = "link_profile_place";
    super(index, linkProfilePlaceMapping);
  }

  async setLike(userid, placeid) {
    const linkcommit = serializeLikesLink("link_profile_place", {userid, placeid});
    const response = await this.bulkAction(linkcommit);
    if (response.status !== 200) {
      return response;
    }
    const sourceCommit = serializeLikesEntity("place", placeid);
    return await this.bulkAction(sourceCommit);
  }

  async setNotation(userid, {placeid, notation}) {
    const linkcommit = serializeNotationLink("link_profile_place", {userid, placeid, notation});
    console.log("linkcommit LOG", linkcommit);
    const response = await this.bulkAction(linkcommit);
    if (response.status !== 200) {
      return response;
    }
    const sourceCommit = serializeNotationEntity("place", {placeid, notation});
    return await this.bulkAction(sourceCommit);
  }

  async getLinksByPlace(placeid) {
    const req = {
      criteria: [
        {
          name: "placeid",
          value: placeid
        }
      ]
    };

    const response = await this.search(req);
    if (response.status !== 200) {
      return response;
    }
    console.log("response search LOG", response);
    return await this.mget({index: "profile", ids: response.payload.map(link => link.id)});
  }
}

export default new LinkProfilePlaceStore();
