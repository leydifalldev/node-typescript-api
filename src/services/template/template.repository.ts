import templateMapping from "./template.mapping";
import { ElasticService } from "../elastic/elastic.service";
import { Uploader } from "../uploader/upload.service";
import { addDays } from "../utils";
import { RepositoryResponse, DateRange } from "../../defs";
import { templateMap } from "./template.map";
import { TemplateBasic } from "./template.defs";

class TemplateRepository extends ElasticService {
  uploader = new Uploader();
  templateMap: Map<string, TemplateBasic>;

  constructor() {
    super("template", templateMapping);
    //this.templateMap = templateMap;
    //this.once("template_mapping_done", () => this.hydrateAllTemplates());
  }

  getInputOptions(index: string, input: string) {
    const query = {
      criteria: [
        {
          name: "index",
          value: index
        },
        {
          name: "input",
          value: input
        }
      ],
      size: 100
    }
    return this.search(query);
  }

  async hydrateTemplate(tplbasic: TemplateBasic) {
    const response: RepositoryResponse = await this.count({criteria: tplbasic.criteria});
    console.log("hydrateTemplate LOG", response);
    if (response.status !== 200) {
      return response;
    }
    if (response.payload < 1) {
      const body = tplbasic.items.flatMap(doc => [{ index: { _index: 'template' }}, doc]);
      console.log(JSON.stringify(body));
      return this.bulkAction({records: body});
    }
  }

  async hydrateAllTemplates() {
    this.templateMap.forEach((tplbasic, key, map) => {
      this.hydrateTemplate(tplbasic);
    });
  }

  async searchLayout(interval: DateRange) {
    const query = {
      criteria: [
        {
          name: 'name',
          value: 'basic'
        }
      ],
      size: 100
    }
    const response: RepositoryResponse = await this.search(query);
    console.log("RepositoryResponse serach layout", response);
    return response;
  }

  createUniqByName(template) {
    return this.checkExistAndIndex({criteria: [{name: "name", value: template.name}], record: template});
  }
}

export default new TemplateRepository();
