import linkProfilesMapping from "./profile.link.profile.mapping";
import { ElasticService } from "../elastic/elastic.service";

export class LinkProfilesStore extends ElasticService {
  constructor() {
    const index = "link_profiles";
    super(index, linkProfilesMapping);
  }
}