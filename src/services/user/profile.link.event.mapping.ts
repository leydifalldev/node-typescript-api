const linkProfileEventMapping = {
  index: "link_profile_event",
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
      participate: {
        type: "boolean"
      },
      visible: {
        type: "boolean"
      },
      profile: {
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
      event: {
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
          },
          start: {
            type: "date"
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

export default linkProfileEventMapping;
