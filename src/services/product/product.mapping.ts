const productMapping = {
  index: "product",
  type: "product",
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
      name: {
        type: "keyword"
      },
      primary: {
        type: "keyword"
      },
      secondary: {
        type: "keyword"
      },
      tertiary: {
        type: "keyword"
      },
      quaternary: {
        type: "keyword"
      },
      header: {
        type: "object",
        properties: {
          label: {
            type: "keyword",
          },
          sublabel: {
            type: "keyword",
          },
          src: {
            type: "keyword",
          }
        }
      },
      cardType: {
        type: "keyword"
      },
      __typename: {
        type: 'keyword',
      },
      category: {
        type: "object",
        properties: {
          id: {
            type: "keyword"
          },
          name: {
            type: "keyword"
          }
        }
      },
      gastronomy: {
        type: "keyword"
      },
      collection: {
        type: "object",
        properties: {
          id: {
            type: "keyword"
          },
          name: {
            type: "keyword"
          }
        }
      },
      tags: {
        type: "completion"
      },
      recipes: {
        type: "object",
        properties: {
          id: {
            type: "keyword"
          },
          name: {
            type: "keyword"
          }
        }
      },
      description: {
        type: "text"
      },
      spicy: {
        type: "keyword"
      },
      price: {
        type: "float"
      },
      currency: {
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
      seller: {
        type: "object",
        properties: {
          id: {
            type: "keyword"
          },
          name: {
            type: "keyword"
          },
          categories: {
            type: "keyword"
          },
          phone: {
            type: "keyword"
          },
          email: {
            type: "keyword"
          },
          logo: {
            type: "keyword"
          },
          country: {
            type: "keyword"
          },
          zone: {
            type: "keyword"
          },
          district: {
            type: "keyword"
          },
          coordinates: {
            type: "geo_point"
          },
          address: {
            type: "text"
          },
          ocean: {
            type: "boolean"
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
        }
      },
      hasmenu: {
        type: "boolean"
      },
      account: {
        type: "keyword"
      },
      pictures: {
        type: "object",
        properties: {
          id: {
            type: "keyword"
          },
          provider: {
            type: "keyword"
          },
          position: {
            type: "integer"
          },
          format: {
            type: "keyword"
          },
          mobile: {
            type: "keyword"
          },
          desktop: {
            type: "keyword"
          },
          main: {
            type: "boolean"
          },
          CREATED_AT: {
            type: "date"
          },
        }
      },
      CMS: {
        type: "object",
        properties: {
          id: {
            type: "keyword"
          },
          order: {
            type: "keyword"
          }
        }
      },
      UIMETA: {
        type: "object",
        properties: {
          positionInCatalog: {
            type: "integer"
          }
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
};

export default productMapping;
