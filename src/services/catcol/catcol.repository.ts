import { ElasticService } from "../elastic/elastic.service";
import catcolMapping from "./catcol.mapping";
import { IHydrateModel } from "../../defs";
import slugify from "../../utils/slugify";

class CatColRepository extends ElasticService {
  commits: Map<string, IHydrateModel>;

  constructor() {
    super("catcol", catcolMapping);
    //this.commits = commits;
    //this.once("catcol_mapping_done", () => this.hydrateAllMeta());
  }

  async slugifyAndCreate(params) {
    try {
      const id = slugify(params.name);
      const record = { ...params, id };

      return this.create({ record });
    } catch (e) {
      console.log(e);
      return {
        status: 500,
        payload: null
      }
    }
  }

  async hydrateAllMeta() {
    this.commits.forEach((commit, key, map) => {
      this.hydrateIndex(commit);
    });
  }
}

export default new CatColRepository();