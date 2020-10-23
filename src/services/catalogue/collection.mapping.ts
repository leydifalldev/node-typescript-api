const collectionMapping = {
  index: "collection",
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
      sellerid: {
        type: "keyword"
      },
      name: {
        type: "keyword"
      },
      category: {
        type: "keyword"
      },
      collection: {
        type: "keyword"
      },
      gastronomy: {
        type: "keyword"
      },
      position: {
        type: "integer"
      },
      cards: {
        type: "object",
        properties: {
          id: {
            type: "keyword"
          },
          name: {
            type: "keyword"
          },
          price: {
            type: "float"
          },
          currency: {
            type: "keyword"
          },
          recipes: {
            type: "keyword"
          },
          src: {
            type: "keyword"
          },
          stock: {
            type: "boolean"
          },
          discount: {
            type: "float"
          },
          quantity: {
            type: "float"
          },
          size: {
            type: "keyword"
          },
          spicy: {
            type: "keyword"
          },
          ranking: {
            type: "object",
            properties: {
              notation: {
                type: "float"
              },
              likes: {
                type: "integer"
              },
              total: {
                type: "integer"
              },
              votes: {
                type: "integer"
              },
            }
          },
        },
      },
      ENABLED: {
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
}

export default collectionMapping;
