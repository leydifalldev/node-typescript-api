export default {
  index: "pagemodel",
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
        type: "keyword",
      },
      index: {
        type: "keyword"
      },
      order: {
        type: "keyword",
      },
      header: {
        type: "object",
        properties: {
          label: {
            type: "keyword",
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
          screen: {
            type: "keyword"
          },
          header: {
            type: "object",
            properties: {
              label: {
                type: "keyword"
              },
              sublabel: {
                type: "keyword"
              },
              fontFamily: {
                type: "keyword"
              },
              fontSize: {
                type: "integer"
              },
              color: {
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
          templateSearch: {
            type: "object",
            properties: {
              page: {
                type: "keyword"
              },
              operation: {
                type: "keyword"
              },
              query: {
                type: "keyword"
              },
              childrenComponent: {
                type: "object",
                properties: {
                  type: {
                    type: "keyword"
                  },
                  redirection: {
                    type: "keyword"
                  }
                }
              },
              searchParams: {
                type: "object",
                properties: {
                  index: {
                    type: "keyword"
                  },
                  size: {
                    type: "integer"
                  },
                  from: {
                    type: "integer"
                  },
                  criteria: {
                    type: "object",
                    properties: {
                      name: {
                        type: "keyword"
                      },
                      props: {
                        type: "boolean"
                      },
                      value: {
                        type: "keyword"
                      },
                      collection: {
                        type: "keyword"
                      },
                      type: {
                        type: "keyword"
                      }
                    }
                  }
                }
              }
            }
          },
          sectionTheme: {
            type: "object",
            properties: {
              base: {
                type: "keyword"
              },
              backgroundColor: {
                type: "keyword"
              }
            }
          }
        },
      }
    }
  }
}