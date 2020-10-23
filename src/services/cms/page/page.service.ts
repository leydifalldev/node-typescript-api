import { ElasticService } from "../../elastic/elastic.service";
import tsectionConfig from "./page.mapping";
import { RepositoryResponse } from "../../../defs";
import pageModelSample from "./page.sample";

class PageRepository extends ElasticService {
  constructor() {
    super("pagemodel", tsectionConfig);
    this.once("pagemodel_mapping_done", () => this.hydrateTsectionIndex());
  }

  async hydrateTsectionIndex() {
    console.log("hydrateTsectionIndex LOG");
    const response: RepositoryResponse = await this.count({});
    if (response.status === 200 && response.payload < 1) {
      this.hydrateIndex(pageModelSample);
    }
  }

  getProducts(params) {
    return this.search({ index: "product", criteria: [{ name: "CMS.id", value: params.id }], size: 10, parserParams: { id: params.id }, cmsId: params.id, parser: "toCMSResponse" });
  }

  getPlaces(params) {
    return this.search({ index: "place", criteria: [{ name: "CMS.id", value: params.id }], size: 10, cmsId: params.id, parser: "toCMSResponse" });
  }

  async getPage(params) {
    try {
      const response = await this.search({ ...params, parser: "toArrayContent" });
      console.log("sections LOG", response);
      if (response.status !== 200) {
        return response;
      }

      let positions = {};
      const categories = response.payload;
      const sections = categories.flatMap(category => category.sections).flatMap((section, key) => {
        positions[section.id] = key;
        return [
          { "index": section.index },
          {
            "query": {
              "bool": {
                "must": {
                  "term": {
                    "CMS.id": section.id
                  }
                }
              }
            }
          }
        ]
      }
      );

      const msearchResponse = await this.mseach({ body: sections, positions });
      // console.log("positions", positions);
      // console.log("msearchResponse", msearchResponse);
      const result = categories.map(category => ({
        ...category,
        sections: category.sections.map(section => ({
          ...section,
          cards: msearchResponse.payload[positions[section.id]].hits.hits.map(card => ({ id: card._id, ...card._source }))
        }))}
      ));
      
      return {
        status: 200,
        error: "NONE",
        payload: result,
      }
    } catch (e) {
      console.log("error", e);
      return {
        status: 500,
        error: "INTERNAL_ERROR",
        payload: false
      }
    }
  }
}

export default new PageRepository();