import { ElasticService } from "../elastic/elastic.service";
import metaMapping from "./meta.mapping";
import { commits } from "./meta.map";
import { IHydrateModel } from "../../defs";
import slugify from "../../utils/slugify";
import Logger from "../logger/logger.service";

const childtMap = {
  supremeLevel: "highLevel",
  highLevel: "downLevel"
}

class MetaRepository extends ElasticService {
  commits: Map<string, IHydrateModel>;

  constructor() {
    super("meta", metaMapping);
    this.commits = commits;
    //this.once("meta_mapping_done", () => this.hydrateAllMeta());
  }

  async addMeta(params) {
    const { name, label, parentID, attributes, owner, childRequirements } = params;

    try {
      const slug = slugify(name);
      let createQuery: any = {};

      if (parentID) {
        const getParentResponse = await this.get({
          id: parentID,
          fields: ["id", "childRequirements"],
          fullError: true
        });

        if (getParentResponse.status !== 200) {
          return Logger.error({
            moduleType: "MetaRepository",
            module: "Repository",
            method: "addMeta",
            error: getParentResponse.error
          });
        }

        if (!getParentResponse.payload) {
          return Logger.error({
            moduleType: "MetaRepository",
            module: "Repository",
            method: "addMeta",
            error: {
              status: 404,
              type: "standard",
              msg: "Parent Meta not found"
            }
          });
        }

        const { childRequirements: requirements } = getParentResponse.payload;

        if (Array.isArray(requirements) && requirements.length > 0) {
          for (let i = 0; i < requirements.length; i++) {
            const attr = params.attributes.filter(attr => attr.name === requirements[i].name)[0];

            if (requirements[i].valueType === "array" && (Array.isArray(attr.value) && attr.value.length < 1)) {
              return Logger.error({
                moduleType: "MetaRepository",
                module: "Repository",
                method: "addMeta",
                error: {
                  status: 400,
                  type: "standard",
                  msg: `${requirements[i].name} UNDEFINED`
                }
              });
            }
  
            if (requirements[i].valueType !== "array" && !(attr && !!attr.value)) {
              return Logger.error({
                moduleType: "MetaRepository",
                module: "Repository",
                method: "addMeta",
                error: {
                  status: 400,
                  type: "standard",
                  msg: `${requirements[i].name} UNDEFINED`
                }
              });
            }
          }
          //});
        }
      }
      createQuery["record"] = {};
      createQuery["record"]["id"] = slug;
      createQuery["record"]["name"] = name;
      createQuery["record"]["label"] = label;
      createQuery["record"]["owner"] = owner || "global";
      createQuery["record"]["attributes"] = attributes;
      createQuery["record"]["parentID"] = parentID || "root";
      createQuery["record"]["childRequirements"] = childRequirements;
      createQuery["record"]["__typename"] = "Meta";
      createQuery["fullError"] = true;

      const response = await this.create(createQuery);

      if (response.status !== 200) {
        return Logger.error({
          module: "Repository",
          moduleType: "MetaRepository",
          error: response.error
        });
      }

      return response;
    } catch (e) {
      return Logger.error({
        moduleType: "MetaRepository",
        module: "Repository",
        error: e
      });
    }
  }

  async hydrateAllMeta() {
    this.commits.forEach((commit, key, map) => {
      this.hydrateIndex(commit);
    });
  }

  async deleteMeta(ids: any = []) {
    const query: any = {
      bool: {
        should: ids.map(id => ({
          multi_match: {
            query: id,
            fields: ["parentID", "id"]
          }
        }))
      }
    }

    return this.deleteByQuery({ query });
  }

  async getList({ parentID }) {
    try {
      return this.search({
        criteria: [{
          name: "parentID",
          value: parentID || "NONE"
        }],
        from: 0,
        size: 100
      });
    } catch (e) {
      return Logger.error({
        moduleType: "MetaRepository",
        module: "Repository",
        method: "getList",
        error: e
      });
    }
  }
}

export default new MetaRepository();