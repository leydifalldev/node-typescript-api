import { ElasticService } from "../elastic/elastic.service";
import { IHydrateModel } from "../../defs";
import locationMapping from "./location.mapping";
import { commits } from "./location.map";

class LocationRepository extends ElasticService {
  commits: Map<string, IHydrateModel>;
  constructor() {
    super("location", locationMapping);
    this.commits = commits;
    //this.once("location_mapping_done", () => this.hydrateLocationData());
  }

  async hydrateLocationData() {
    this.commits.forEach((commit, key, map) => {
      this.hydrateIndex(commit);
    });
  }
}

export default new LocationRepository();