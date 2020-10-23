export default {
  index: "tsection",
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
      screen: {
        type: "keyword"
      },
      header: {
        type: "object",
        properties: {
          label: {
            type: "keyword"
          }
        }
      },
      order: {
        type: "integer"
      },
      childrenComponent: {
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
      children: {
        type: "object",
        properties: {
          id: {
            type: "keyword"
          },
          label: {
            type: "keyword"
          },
          labelLeft: {
            type: "keyword"
          },
          sublabelLeft: {
            type: "keyword"
          },
          labelRight: {
            type: "keyword"
          },
          sublabelRight: {
            type: "keyword"
          },
          header: {
            type: "object",
            properties: {
              id: {
                type: "keyword"
              },
              label: {
                type: "keyword"
              },
              sublabel: {
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
          order: {
            type: "integer"
          },
          src: {
            type: "keyword"
          },
          subchildren: {
            type: "object",
            properties: {
              id: {
                type: "keyword"
              },
              label: {
                type: "keyword"
              },
              sublabel: {
                type: "keyword"
              },
              src: {
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
                  }
                }
              }
            }
          },
        }
      },
      THEME: {
        type: "keyword"
      }
    },
  }
}