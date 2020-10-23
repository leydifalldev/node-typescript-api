const eventMapping = {
  index: 'event',
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
        type: 'keyword',
      },
      __typename: {
        type: 'keyword',
      },
      name: {
        type: 'keyword',
      },
      start: {
        type: 'date',
      },
      end: {
        type: 'date',
      },
      categories: {
        type: 'keyword',
      },
      description: {
        type: 'text',
      },
      contact: {
        type: 'object',
        properties: {
          email: {
            type: 'keyword',
          },
          phone: {
            type: 'keyword',
          },
        },
      },
      tags: {
        type: 'keyword',
      },
      place: {
        type: "object",
        properties: {
          id: {
            type: "keyword"
          },
          name: {
            type: "keyword"
          },
          logo: {
            type: "keyword"
          },
          zone: {
            type: "keyword"
          },
          location: {
            type: "geo_point"
          },
          ocean: {
            type: "boolean"
          },
          country: {
            type: "keyword"
          }
        }
      },
      location: {
        type: 'object',
        properties: {
          address: {
            type: 'keyword',
          },
          zone: {
            type: 'keyword',
          },
          coordinates: {
            type: 'geo_point',
          },
          country: {
            type: 'keyword'
          },
          ocean: {
            type: 'boolean'
          }
        },
      },
      prices: {
        type: 'object',
        properties: {
          class: {
            type: 'keyword',
          },
          value: {
            type: 'integer',
          },
        },
      },
      account: {
        type: 'object',
        properties: {
          id: {
            type: 'keyword'
          },
          email: {
            type: 'keyword'
          }
        }
      },
      artists: {
        type: 'object',
      },
      hosts: {
        type: 'object',
      },
      ranking: {
        type: 'object',
        properties: {
          notation: {
            type: 'float',
          },
          likes: {
            type: 'integer',
          },
        },
      },
      src: {
        type: "keyword"
      },
      pictures: {
        type: "object",
        properties: {
          id: {
            type: "keyword"
          },
          position: {
            type: "integer"
          },
          mobile: {
            type: "keyword"
          },
          desktop: {
            type: "keyword"
          }
        }
      },
      visible: {
        type: "text"
      },
      CREATED_AT: {
        type: 'date',
      },
      LAST_UPDATE_DATE: {
        type: 'date',
      },
      LAST_UPDATE_USER: {
        type: 'keyword',
      },
    },
  },
};

export default eventMapping;
