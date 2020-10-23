import { ElasticService } from "../../elastic/elastic.service";
import tsectionConfig from "./tsection.mapping";
import { RepositoryResponse } from "../../../defs";
import pageSample from "./page.sample";

class PageRepository extends ElasticService {
  constructor() {
    super("tsection", tsectionConfig);
    this.once("tsection_mapping_done", () => this.hydrateTsectionIndex());
  }

  async hydrateTsectionIndex() {
    const response: RepositoryResponse = await this.count({});
    if (response.status === 200 && response.payload < 1) {
      this.hydrateIndex(pageSample);
    }
  }
}

export default new PageRepository();