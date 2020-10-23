const placeMapping = {
  index: 'place',
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
      name: {
        type: 'keyword',
      },
      __typename: {
        type: 'keyword',
      },
      description: {
        type: 'text',
      },
      categories: {
        type: 'keyword',
      },
      categoryType: {
        type: "keyword",
      },
      price: {
        type: "object",
        properties: {
          period: {
            type: "keyword"
          },
          final: {
            type: "float"
          },
          currency: {
            type: "keyword"
          },
          discount: {
            type: "float"
          },
          base: {
            type: "float"
          },
          main: {
            type: "boolean"
          }
        }
      },
      gastronomies: {
        type: 'keyword',
      },
      tags: {
        type: 'keyword',
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
      location: {
        type: 'object',
        properties: {
          address: {
            type: 'keyword',
          },
          zone: {
            type: 'keyword',
          },
          district: {
            type: 'keyword',
          },
          coordinates: {
            type: 'geo_point',
          },
          ocean: {
            type: 'boolean',
          },
          country: {
            type: 'keyword'
          }
        },
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
      temporaly: {
        type: 'boolean',
      },
      logo: {
        type: "object",
        properties: {
          id: {
            type: "keyword"
          },
          mobile: {
            type: "keyword"
          },
          desktop: {
            type: "keyword"
          },
          format: {
            type: "keyword"
          },
          provider: {
            type: "keyword"
          },
          CREATED_AT: {
            type: "keyword"
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
          },
        }
      },
      qrcode: {
        type: "object",
        properties: {
          id: {
            type: "keyword"
          },
          mobile: {
            type: "keyword"
          },
          desktop: {
            type: "keyword"
          },
        },
      },
      THEME: {
        type: "object",
        properties: {
          primaryColor: {
            type: "keyword"
          },
          secondaryColor: {
            type: "keyword"
          },
          tertiaryColor: {
            type: "keyword"
          }
        }
      },
      CMS: {
        type: "object",
        properties: {
          id: {
            type: "keyword"
          },
          order: {
            type: "integer"
          }
        }
      },
      CATALOGUE_ORDER: {
        type: "object",
        properties: {
          id: {
            type: "keyword",
          },
          order: {
            type: "integer"
          }
        }
      },
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
      catalogue: {
        type: "object",
        properties: {
          id: {
            type: "keyword"
          },
          order: {
            type: "integer"
          },
          total: {
            type: "integer",
          },
          header: {
            type: "object",
            properties: {
              label: {
                type: "keyword"
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
              total: {
                type: "integer",
              },
              header: {
                type: "object",
                properties: {
                  label: {
                    type: "keyword"
                  },
                  sublabel: {
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
                  cardType: {
                    type: "keyword"
                  },
                  price: {
                    type: "float"
                  },
                  currency: {
                    type: "keyword"
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
                  __typename: {
                    type: 'keyword',
                  },
                },
              },
            }
          }
        },
      },
    },
  },
};

export default placeMapping;
