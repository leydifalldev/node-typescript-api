import linkProfileProductMapping from "./profile.link.product.mapping";
import { ElasticService } from "../elastic/elastic.service";

export class LinkProfileProductStore extends ElasticService {
  constructor() {
    const index = "link_profile_product";
    super(index, linkProfileProductMapping);
  }
}