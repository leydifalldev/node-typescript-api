import * as fs from 'fs';
import { Client } from "@elastic/elasticsearch";
import { NewDocumentOptions, UpdateOptions, bulkParams, IGetParams, IUpdateParams, IBulkActionParams, ICheckExistAndCreateParams, IAggByFieldParams, ICreateParams, IGetByParentIDParams, IDeleteByQueryParams, IPrefixSearchParams } from "./elastic.defs";
import { EventEmitter } from "events";
import ElasticClient from "./elastic.client";
import { RepositoryResponse, IHydrateModel } from "../../defs";
import config from "../../config";
import { createParsers, getParser, mgetParser, searchParsers, updateParsers } from "./elastic.parsers";
import parseError from './elastic.error';
import { Printer } from '../../utils/console.printer';

const uuid = require("uuid/v4");

export class ElasticService extends EventEmitter {
  protected esclient: Client;

  constructor(protected index: string, private indexConfig: any) {
    super();
    this.index = index;
    this.indexConfig = indexConfig;
    //this.setClient();
    this.esclient = ElasticClient.getClient();
    this.config();
  }

  async config() {
    try {
      const result = await this.esclient.indices.exists({ index: this.index });
      if (result.statusCode === 404) {
        console.warn(`🟡 ${this.index} does not exists ====> creating ...`);
        const createIndexResult = await this.esclient.indices.create({
          index: this.index,
          body: {
            mappings: this.indexConfig && this.indexConfig.mappings,
            settings: this.indexConfig && this.indexConfig.settings,
          },
        });

        if (createIndexResult.statusCode === 200) {
          console.log(`🟢 MAPPING SUCCESSFULLY ADDED for ${this.index}`);
          this.emit(`${this.index}_mapping_done`);
        } else {
          throw new Error("Cannot create mapping");
        }
      } else {
        console.warn(`🟢 ${this.index} index already exists`);
      }
    } catch (e) {
      console.error("Error to set config", e);
    }
  }

  // async putMapping(mappingSchema) {
  //   try {
  //     console.log("Creating Mapping index");
  //     console.log(mappingSchema);
  //     const mappingResult = await this.esclient.indices.putMapping(
  //       mappingSchema
  //     );

  //     if (mappingResult.statusCode === 200) {
  //       console.log(`🟢 MAPPING SUCCESSFULLY ADDED for ${mappingSchema.index}`);
  //       this.emit(`${mappingSchema.index}_mapping_done`);
  //     } else {
  //       throw new Error("Cannot create mapping");
  //     }
  //   } catch (e) {
  //     console.error("Error =====> ", e.meta.body.error);
  //   }
  // }

  getClient() {
    return this.esclient;
  }

  toListResponse(result) {
    const {
      body: { hits }, statusCode
    } = result;
    const data = hits.hits.map(hit => {
      hit._source.id = hit._id;
      return { id: hit._id, ...hit._source };
    });
    return {
      status: statusCode,
      error: null,
      payload: {
        total: hits.total.value,
        data: data
      }
    };
  }

  formatmgetList(result) {
    const {
      body: { docs }
    } = result;
    const data = docs.map(doc => {
      //doc._source.id = doc._id;
      return { id: doc._id, ...doc._source };
    });
    return {
      status: result.statusCode,
      error: null,
      payload: {
        total: docs.length,
        data: data
      }
    };
  }

  async count(params) {
    const { criteria } = params;
    const request = {
      index: this.index,
      body: {
        query: {
          bool: {
            must: this.buildQuery(criteria || [])
          }
        }
      },
    };

    try {
      const response = await this.esclient.count(request);
      return {
        status: response.statusCode,
        payload: response.body.count,
        error: "NONE"
      }
    } catch (e) {
      console.error(e);
      return {
        total: 0,
        payload: null,
        status: e.statusCode,
        error: "level-4"
      };
    }
  }

  async search(params) {
    const { criteria, size, from, fields, index, parser, parserParams, fullError = false, ...rest } = params;
    const request = {
      index: index || this.index,
      _source: fields || [],
      body: {
        query: {
          bool: {
            must: this.buildQuery(criteria || [])
          }
        }
      },
      from: from || 0,
      size: size || 100
    };

    try {
      const result = await this.esclient.search(request);
      const selectedParser = parser || "toPaginateResponse";
      const response = searchParsers[selectedParser](result, parserParams);
      Printer.searchResult(response);
      return response;
    } catch (e) {
      console.error(e);
      return {
        total: 0,
        payload: null,
        status: e.statusCode,
        error: fullError ? e : "level-4"
      };
    }
  }

  async mget(params) {
    const { index, ids, parser, ...rest } = params;
    const selectedParser = parser || "toArrayContent";

    try {
      const result = await this.esclient.mget({ body: { ids }, index: index || this.index });

      return mgetParser[selectedParser](result);
    } catch (e) {
      console.error(e);
      return {
        total: 0,
        payload: null,
        status: e.statusCode,
        error: "level-4"
      };
    }
  }

  async mseach(params) {
    const { index, body, inputParser, outputParser, ...rest } = params;

    try {
      const result = await this.esclient.msearch({ body });

      return {
        status: 200,
        payload: result.body.responses,
        error: null
      };
    } catch (e) {
      console.error(e);
      return {
        total: 0,
        payload: null,
        status: e.statusCode,
        error: "level-4"
      };
    }
  }

  async prefixSearch(params: IPrefixSearchParams) {
    const { index, size, field, q, from, parser } = params;
    let prefix = {};
    prefix[field] = { "query": q };
    const query = {
      index: index || this.index,
      body: {
        "query": {
          "match_phrase_prefix": prefix
        }
      },
      from: from || 0,
      size: size || 100
    };

    const result = await this.esclient.search(query);
    const selectedParser = parser || "toPaginateResponse";
    const response = searchParsers[selectedParser](result, {});
    Printer.searchResult(response);
    return response;
  }

  async retrieve(params) {
    const { match, size, from, q } = params;
    const boolQuery = {
      bool: {
        must: this.buildTerms(match)
      }
    };

    const mallQuery = {
      match_all: {}
    };

    const req = {
      body: {
        query: match ? boolQuery : mallQuery
      },
      size: size || 10,
      from: from || 0,
      q
    };
    return this.search(req);
  }

  async add(params: any) {
    let { record, options } = params;
    const now = new Date();

    if (options.ranking) {
      record = { ...record, ranking: { 'likes': 0, 'notation': 0, 'total': 0, 'votes': 0 } }
    }
    record = { ...record, CREATED_AT: now, LAST_UPDATE_DATE: now };

    const query: any = {
      index: this.index,
      refresh: 'true',
      body: record
    }

    try {
      const resp = await this.esclient.index(query);

      return {
        payload: resp.body._id,
        status: 200,
        error: "NONE"
      };
    } catch (e) {
      console.error("ERROR", e);
      console.error(e);
      return {
        payload: null,
        status: e.statusCode,
        error: "level-4"
      };
    }
  }

  async create(params: ICreateParams) {
    const { record, options, routing, action, fullError } = params;
    const now = new Date();
    let parsedRecord;

    if (options && options.ranking) {
      parsedRecord = { ...record, ranking: { 'likes': 0, 'notation': 0, 'total': 0, 'votes': 0 } }
    } else {
      parsedRecord = record;
    }

    parsedRecord = { ...parsedRecord, CREATED_AT: now, LAST_UPDATE_DATE: now };

    const query: any = {
      id: parsedRecord.id,
      routing,
      index: this.index,
      refresh: "true",
      body: parsedRecord
    }

    try {
      const selected = action || "create";
      const resp = await this.esclient[selected](query);

      return {
        payload: resp.body._id,
        status: 200,
        error: "NONE"
      };
    } catch (e) {
      return {
        status: e.statusCode,
        payload: null,
        error: fullError ? e : parseError[e.statusCode]
      }
    }
  }

  async checkExistAndIndex(params: ICheckExistAndCreateParams) {
    const { criteria, record } = params;
    const response = await this.search({ criteria });

    if (response.payload.total > 0) {
      return {
        status: 409,
        error: "THIS RECORD ALREADY EXISTS",
        payload: false
      }
    }
    return this.add(record);
  }

  async update(params: IUpdateParams) {
    const { id, record, fields, index, options, parser } = params;
    const now = new Date();
    let selectedParser = parser || 'toBoolResponse';
    const query: any = {
      index: index || this.index,
      refresh: "true",
      id: id,
      _source: fields || [],
      body: {
        doc: { ...record, LAST_UPDATE_DATE: now },
        doc_as_upsert: true,
      }
    }

    try {
      const resp = await this.esclient.update(query);

      return {
        status: 200,
        error: "none",
        payload: updateParsers[selectedParser](id, resp)
      };
    } catch (e) {
      console.error(e.meta.body);

      return {
        status: e.statusCode,
        error: "DATABASE ERROR",
        payload: null
      };
    }
  }

  async updateField(id, fieldname, record, index = null) {
    const now = new Date();
    const meta = { CREATED_AT: now, LAST_UPDATE_DATE: now };
    const query: any = {
      index: this.index,
      refresh: "true",
      id: id,
      body: {
        script: {
          source: "ctx._source['" + fieldname + "'] = params.record; ctx._source.LAST_UPDATE_DATE = params.now;",
          lang: "painless",
          params: {
            record: record,
            now: new Date()
          }
        },
      }
    }

    try {
      const resp = await this.esclient.update(query);

      return {
        status: resp.statusCode,
        error: "none",
        payload: resp.body._shards.failed === 0
      };
    } catch (e) {
      console.error(e.meta.body.error);

      return {
        status: e.statusCode,
        error: "DATABASE ERROR",
        payload: null
      };
    }
  }

  async bulkAction(params: IBulkActionParams) {
    const { records, getItems = false } = params;
    const query: any = { refresh: "true", body: records };

    try {
      const {
        statusCode,
        body: { items, errors }
      } = await this.esclient.bulk(query);
      //console.log("response body", items);
      //console.log("response details body", items[0].create.error);
      return {
        status: statusCode,
        error: errors,
        payload: getItems ? items : !errors
      };
    } catch (e) {
      console.error("Error BULK ====> ", e);
      console.error("Error", e.meta.body.error);
      return {
        status: e.statusCode,
        error: "DATABASE ERROR",
        payload: false
      };
    }
  }

  async updateSubField(fieldName, id, record) {
    const now = new Date();
    const meta = { CREATED_AT: now, LAST_UPDATE_DATE: now };

    try {
      const query: any = {
        index: this.index,
        refresh: "true",
        id: id,
        body: {
          script: {
            source:
              "if (!ctx._source.containsKey('" +
              fieldName +
              "')) {ctx._source." +
              fieldName +
              "= new ArrayList();} ctx._source." +
              fieldName +
              ".addAll(params.record); ctx._source.LAST_UPDATE_DATE = params.now;",
            lang: "painless",
            params: {
              record: record,
              now: new Date()
            }
          },
          upsert: {
            pictures: 1
          }
        }
      }
      const resp = await this.esclient.update(query);

      return {
        status: resp.statusCode,
        error: "none",
        payload: resp.body._shards.failed === 0
      };
    } catch (e) {
      console.error(e.meta.body.error);

      return {
        status: e.statusCode,
        error: "DATABASE ERROR",
        payload: null
      };
    }
  }

  async addItemToArray(fieldName, id, item) {
    const record = { ...item, id: new uuid() };
    const query: any = {
      index: this.index,
      refresh: "true",
      id: id,
      body: {
        script: {
          source:
            "ctx._source." + fieldName + ".add(params." + fieldName + ")",
          lang: "painless",
          params: record
        }
      }
    }
    try {
      const resp = await this.esclient.update(query);

      return {
        status: resp.statusCode,
        error: "none",
        payload: resp.body._shards.failed === 0
      };
    } catch (e) {
      console.error(e);
      return {
        status: e.statusCode,
        error: "DATABASE ERROR",
        payload: null
      };
    }
  }

  async delete(id) {
    try {
      const query: any = {
        index: this.index,
        refresh: "true",
        id
      }

      const resp = await this.esclient.delete(query);

      return {
        status: resp.statusCode,
        error: "none",
        payload: resp.body._shards.failed === 0
      };
    } catch (e) {
      console.error(e);
      return {
        status: e.statusCode,
        payload: null,
        error: e.body.result
      };
    }
  }

  async get(params: IGetParams) {
    const { id, index, fields, routing, outputParser, fullError = false } = params;

    try {
      const selectedParser = outputParser || "toObject";
      const result = await this.esclient.get({
        index: index || this.index,
        id,
        routing,
        _source: fields || []
      });

      const response = getParser[selectedParser](result);
      console.log("response LOGGGG", response);
      return response;
    } catch (e) {
      console.error(e.meta.body);
      return {
        status: e.statusCode,
        error: fullError ? e : "NOT FOUND",
        payload: null
      };
    }
  }

  searchErrorHandler(e) {
    if (e.statusCode === 404) {
      return {
        status: 404,
        error: "Place Not Found",
        data: []
      };
    } else if (e.statusCode === 405) {
      return {
        status: 405,
        error: "No request id Found",
        data: []
      };
    }
  }

  buildTerms(must) {
    if (!Array.isArray(must)) {
      return [];
    }
    return must.map(m => {
      const build = {};
      if (!m.value || m.collection.length === 0) {
        return null
      }
      if (m.collection) {
        build[m.name] = m.collection;
        return { terms: build };
      }
      build[m.name] = m.value;
      return { term: build };
    });
  }

  buildQuery(must = []) {
    const criteriaMust = [];
    must.map(m => {
      const build = {};
      if (m.value) {
        build[m.name] = m.value;
        criteriaMust.push({ term: build });
      }
      if (m.collection && m.collection.length > 0) {
        build[m.name] = m.collection;
        criteriaMust.push({ terms: build });
      }
    });
    return criteriaMust;
  }

  async groupByDate(interval = "hour", fieldName = "CREATED_AT", criteria = [], size, from) {
    const req = {
      index: this.index,
      body: {
        query: {
          bool: {
            must: this.buildQuery(criteria)
          }
        },
        aggs: {
          group: {
            date_histogram: {
              field: fieldName,
              calendar_interval: interval
            }
          }
        },
        size: size || 10,
        from: from || 0
      }
    };
    try {
      const { body, statusCode } = await this.esclient.search(req);
      const resp = body.aggregations.group.buckets.map(group => {
        return {
          name: group.key_as_string,
          value: group.doc_count
        };
      });

      return {
        status: statusCode,
        payload: resp,
        error: "NONE"
      };
    } catch (e) {
      return {
        status: 500,
        payload: false,
        error: "SERVICE_ERROR"
      };
    }
  }

  async nestedAggByField(criteria = [], primaryfield, secondaryfield, index = null) {
    const req = {
      index: index || this.index,
      body: {
        query: {
          bool: {
            must: this.buildQuery(criteria || [])
          }
        },
        aggs: {
          primary: {
            terms: {
              field: primaryfield,
              size: 10
            },
            aggs: {
              secondary: {
                terms: {
                  field: secondaryfield
                }
              }
            }
          },
        }
      }
    };

    try {
      const { body, statusCode } = await this.esclient.search(req);
      const resp = body.aggregations.primary.buckets.map(primaryItem => {
        return {
          id: primaryItem.key,
          name: primaryItem.key,
          value: primaryItem.doc_count,
          children: primaryItem.secondary.buckets.map(secondaryItem => {
            return {
              name: secondaryItem.key,
              value: secondaryItem.doc_count
            };
          })
        };
      });
      return {
        payload: resp,
        status: statusCode,
        error: "NONE"
      };
    } catch (e) {
      console.error("ERROR ===>", e.body.error.root_cause);
      return {
        payload: false,
        status: 500,
        error: "DATABASE ERROR"
      };
    }
  }

  async aggByField(params: IAggByFieldParams) {
    console.log("aggByField LOG", params);
    const req = {
      index: params.index || this.index,
      body: {
        query: {
          bool: {
            must: this.buildQuery(params.criteria || [])
          }
        },
        aggs: {
          group: {
            terms: {
              field: params.fieldname,
              size: 10
            }
          }
        }
      }
    };

    try {
      const { body, statusCode } = await this.esclient.search(req);
      const resp = body.aggregations.group.buckets.map(group => {
        return {
          id: group.key,
          name: group.key,
          value: group.doc_count
        };
      });
      return {
        payload: resp,
        status: statusCode,
        error: "NONE"
      };
    } catch (e) {
      return {
        payload: false,
        status: 500,
        error: "DATABASE ERROR"
      };
    }
  }

  increment(fieldName, index, docId) {
    const commits = {};
    const params = {
      now: new Date()
    };
    const source = "if (ctx._source['" + fieldName + "'] == null) { ctx._source['" + fieldName + "'] = 1 } else { ctx._source." + fieldName + "++ } ctx._source.LAST_UPDATE_DATE = params.now;";
    commits["refresh"] = true;
    commits["body"] = [
      {
        update: {
          _id: docId,
          _index: index
        }
      },
      { script: { source, params, lang: "painless" }, scripted_upsert: true }
    ];
    return commits;
  }

  async setLink(entitySource, linkRecord, payload) {
    const now = new Date();
    const linkCommit = {};
    linkCommit["refresh"] = true;
    linkCommit["body"] = [
      {
        update: {
          _id: payload.userid,
          _index: `link_profile_${payload.entity}`
        }
      },
      {
        doc: linkRecord,
        doc_as_upsert: true
      }
    ];

    if (payload.comment) {
      linkCommit["body"].push(
        {
          update: {
            _id: payload.userid,
            _index: `link_profile_${payload.entity}`
          }
        },
        {
          script: {
            source: "if (!ctx._source.containsKey('comments')) {ctx._source.comments = new ArrayList();} ctx._source.comments.addAll(params); ctx._source.LAST_UPDATE_DATE = params.now;",
            params: {
              id: new uuid(),
              date: now,
              comment: payload.comment
            },
            lang: "painless"
          },
          scripted_upsert: true
        }
      );
    }

    const linkResponse = await this.bulkAction(linkCommit);

    if (linkResponse.error) {
      return linkResponse;
    }

    const entityCommit = {};

    entityCommit["refresh"] = true;
    entityCommit["body"] = [
      {
        update: {
          _id: payload.id,
          _index: payload.entity
        }
      },
      {
        script: {
          source: entitySource,
          params: {
            notation: payload.notation,
            now: now
          },
          lang: "painless"
        },
        scripted_upsert: true
      }
    ];

    const entityResponse = await this.bulkAction(entityCommit);
    return entityResponse;
  }

  async setDislike(params) {
    const entitySource = "if (ctx._source.ranking == null) { ctx._source.ranking = [ 'likes': 0, 'notation': 0 ] } if (ctx._source.ranking.likes == null) { ctx._source.ranking.likes = 0 } if (ctx._source.ranking.likes > 0) { ctx._source.ranking.likes--; ctx._source.LAST_UPDATE_DATE = params.now;}";
    const linkRecord = { userid: params.userid, placeid: params.placeid, like: false, LAST_UPDATE_DATE: new Date() };
    const response = await this.setLink(entitySource, linkRecord, params);
    return response;
  }

  async addNotation(params) {
    const now = new Date();
    const entitySource = "if (ctx._source.ranking == null) { ctx._source.ranking = [ 'likes': 0, 'notation': 0, 'total': 0, 'votes': 0 ] } if (ctx._source.ranking.notation == null) { ctx._source.ranking.notation = 0; ctx._source.ranking.votes = 0; ctx._source.ranking.total = 0; } ctx._source.ranking.total = ctx._source.ranking.total + params.notation; ctx._source.ranking.votes++; ctx._source.ranking.notation = ctx._source.ranking.total / ctx._source.ranking.votes; ctx._source.LAST_UPDATE_DATE = params.now;";
    const linkRecord = { idsrc: params.userid, placeid: params.placeid, notation: params.notation, LAST_UPDATE_DATE: now };
    const response = await this.setLink(entitySource, linkRecord, params);
    return response;
  }

  async aggTopHits({ criteria = [], size = 10, field, index = null }) {
    const req = {
      index: index || this.index,
      body: {
        query: {
          bool: {
            must: this.buildQuery(criteria)
          }
        },
        aggs: {
          "groupby": {
            terms: {
              field: field,
              size
            },
            aggs: {
              "tophits": {
                top_hits: {
                  size: size || 10
                }
              }
            }
          }
        }
      }
    }
    try {
      const { body, statusCode } = await this.esclient.search(req);
      const result = body.aggregations.groupby.buckets.map(bucket => ({
        name: bucket.key,
        total: bucket.doc_count,
        items: bucket.tophits.hits.hits.map(hit => ({ ...hit._source, id: hit._id }))
      }));

      return {
        error: "NONE",
        status: 200,
        payload: result
      }
    } catch (e) {
      console.error("Error", e);
    }
  }

  async nestedAggTopHits(criteria = [], primaryfield, secondaryfield, index = null) {
    const req = {
      index: index || this.index,
      body: {
        query: {
          bool: {
            must: this.buildQuery(criteria || [])
          }
        },
        aggs: {
          primary: {
            terms: {
              field: primaryfield,
              size: 10
            },
            aggs: {
              secondary: {
                terms: {
                  field: secondaryfield,
                  size: 10
                },
                aggs: {
                  toplisthits: {
                    top_hits: {}
                  }
                }
              }
            }
          },
        }
      }
    };

    try {
      const { body, statusCode } = await this.esclient.search(req);
      return {
        status: statusCode,
        payload: body,
        error: "NONE"
      }
    } catch (e) {
      console.error("ERROR ===>", e.body.error.root_cause);
      return {
        payload: {},
        status: 500,
        error: "DATABASE ERROR"
      };
    }
  }

  async hydrateIndex(commit: IHydrateModel) {
    const response: RepositoryResponse = await this.count({ criteria: commit.criteria });

    if (response.status !== 200) {
      return response;
    }
    if (response.payload < 1) {
      return this.bulkExec(commit.items, commit.bulkHead, commit.__typename);
      //const body = commit.items.flatMap(doc => [commit.bulkHead, doc]);
      //console.log(JSON.stringify(body));
      //return this.bulkAction({ refresh: true, body });
    }
  }

  async bulkExec(documents: any = [], params: bulkParams, __typename) {
    let records = [];

    switch (params.action) {
      case 'index':
        records = documents.flatMap(doc => [{ 'index': { _index: params.index } }, { ...doc, __typename }]);
        break;
      case 'create':
        records = documents.flatMap(doc => [{ 'create': { _index: params.index, _id: doc.id } }, { ...doc, __typename }]);
        break;
      case 'update':
        records = documents.flatMap(doc => [{ 'update': { _index: params.index, _id: doc.id } }, { ...doc, __typename }]);
        break;
      case 'delete':
        records = documents.flatMap(doc => [{ 'delete': { _index: params.index, _id: doc.id } }, { ...doc, __typename }]);
        break;
    }

    if (records.length > 0) {
      return this.bulkAction({ records });
    }

    return {
      status: 500,
      payload: false,
      error: "INTERNAL_ERROR"
    }
  }

  async searchItemsWithExistField(params) {
    const { index, from, size, fieldname, fields } = params;
    try {
      const query = {
        index: index || this.index,
        _source: fields || [],
        body: {
          query: {
            exists: {
              field: fieldname
            }
          }
        },
        from: from || 0,
        size: size || 100
      };

      const result = await this.esclient.search(query);
      return this.formatmgetList(result);
    } catch (e) {
      console.error(e);
      return {
        total: 0,
        payload: null,
        status: e.statusCode,
        error: "level-4"
      };
    }
  }

  async getByParentID({ index, customSearch, from, size, fields, parser, parserParams }: IGetByParentIDParams) {
    try {
      const { parentID, level } = customSearch;
      const query = {
        index: index || this.index,
        body: {
          query: {
            bool: {
              filter: {
                parent_id: {
                  type: level,
                  id: parentID
                }
              }
            }
          }
        },
        _source: fields || [],
        from: from || 0,
        size: size || 100
      }
      const result = await this.esclient.search(query);
      const selectedParser = parser || "toPaginateResponse";
      const response = searchParsers[selectedParser](result, parserParams);
      Printer.searchResult(response);
      return response;
    } catch (e) {
      console.log("e logggg", e);
      return {
        payload: null,
        status: e.statusCode,
        error: "level-4"
      };
    }
  }

  async deleteByQuery({ index, query, parser }: IDeleteByQueryParams) {
    const selectedParser = parser || "toBoolResponse";

    try {
      const result = await this.esclient.deleteByQuery({
        index: index || this.index,
        body: { query },
        refresh: true,
      });

      const response = createParsers[selectedParser](result);
      return {
        status: 200,
        payload: response
      }
    } catch (e) {
      console.error("ERROR ===>", e.meta.body);
      return {
        status: e.statusCode,
        error: e
      };
    }
  }
}
