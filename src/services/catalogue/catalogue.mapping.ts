const catalogueMapping = {
  index: 'catalogue',
  type: '_doc',
  include_type_name: true,
  settings: {
    index: {
      number_of_shards: 5,
      number_of_replicas: 1
    }
  },
  mappings: {
    properties: {
      CATALOGUE_CATEGORIES: {
        type: "object",
        properties: {
          id: {
            type: "keyword"
          },
          name: {
            type: "keyword"
          },
          order: {
            type: "integer"
          }
        }
      },
      sections: {
        type: "object",
        properties: {
          id: {
            type: "keyword"
          },
          order: {
            type: "integer"
          },
          sellerid: {
            type: "keyword"
          },
          screen: {
            type: "keyword"
          },
          total: {
            type: "integer"
          },
          header: {
            type: "object",
            properties: {
              label: {
                type: "keyword"
              }
            }
          },
          cardComponent: {
            type: "object",
            properties: {
              type: {
                type: "keyword"
              }
            }
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
        },
      },
    },
  },
};

export default catalogueMapping;
