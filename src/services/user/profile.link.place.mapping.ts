const linkProfilePlaceMapping = {
  index: "link_profile_place",
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
      notification: {
        type: "boolean"
      },
      follows: {
        type: "boolean"
      },
      visible: {
        type: "boolean"
      },
      userid: {
        type: "keyword"
      },
      placeid: {
        type: "keyword"
      },
      comments: {
        type: "object",
        properties: {
          id: {
            type: "keyword"
          },
          date: {
            type: "date"
          },
          comment: {
            type: "text"
          }
        }
      },
      notation: {
        type: "float"
      },
      like: {
        type: "boolean"
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

export default linkProfilePlaceMapping;
