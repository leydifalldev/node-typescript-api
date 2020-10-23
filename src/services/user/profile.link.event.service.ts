import linkProfileEventMapping from "./profile.link.event.mapping";
import { ElasticService } from "../elastic/elastic.service";

export class LinkProfileEventStore extends ElasticService {
  constructor() {
    const index = "link_profile_event";
    super(index, linkProfileEventMapping);
  }
}
