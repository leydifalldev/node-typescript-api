const linkProfilesMapping = {
  index: "link_profiles",
  type: "_doc",
  include_type_name: true,
  settings: {
    index: {
      number_of_shards: 5,
      number_of_replicas: 1
    }
  },
  mappings: {
    properties: {
      id: {
        type: "keyword"
      },
      notification: {
        type: "boolean"
      },
      follows: {
        type: "boolean"
      },
      likes: {
        type: "boolean"
      },
      visible: {
        type: "boolean"
      },
      from: {
        type: "object",
        properties: {
          id: {
            type: "keyword"
          },
          name: {
            type: "keyword"
          },
          src: {
            type: "keyword"
          }
        }
      },
      to: {
        type: "object",
        properties: {
          id: {
            type: "keyword"
          },
          name: {
            type: "keyword"
          },
          src: {
            type: "keyword"
          }
        }
      },
      ranking: {
        type: "object",
        properties: {
          notation: {
            type: "float"
          },
          likes: {
            type: "integer"
          }
        }
      },
      CREATED_AT: {
        type: "date"
      },
      LAST_UPDATE_DATE: {
        type: "date"
      },
      LAST_UPDATE_USER: {
        type: "keyword"
      }
    }
  }
};

export default linkProfilesMapping;
