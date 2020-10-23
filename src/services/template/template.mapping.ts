const templateMapping = {
    index: 'template',
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
        label: {
          type: 'keyword'
        },
        sublabel: {
          type: 'keyword'
        },
        component: {
          type: 'keyword'
        },
        value: {
          type: 'keyword',
        },
        group: {
          type: 'keyword',
        },
        input: {
          type: 'keyword',
        },
        position: {
          type: 'integer',
        },
        screen: {
          type: 'keyword',
        },
        index: {
          type: 'keyword',
        },
        parent: {
          type: 'keyword'
        },
        children: {
          type: 'object',
          properties: {
            id: {
              type: 'keyword'
            },
            name: {
              type: 'keyword'
            },
            label: {
              type: 'keyword'
            },
            sublabel: {
              type: 'keyword'
            },
            position: {
              type: 'integer'
            },
            key: {
              type: 'keyword'
            },
            value: {
              type: 'keyword'
            },
            operation: {
              type: 'keyword'
            },
            params: {
              type: 'object',
              properties: {
                criteria: {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'keyword'
                    },
                    key: {
                      type: 'keyword'
                    },
                    collection: {
                      type: 'keyword'
                    }
                  }
                },
                size: {
                  type: 'integer'
                }
              }
            },
            backgroundColor: {
              type: 'keyword'
            },
            backgroundImg: {
              type: 'keyword'
            },
            card: {
              type: 'keyword'
            },
            size: {
              type: 'integer'
            }
          }
        },
        starteffect: {
          type: 'date',
        },
        endeffect: {
          type: 'date',
        },
        description: {
          type: 'text',
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
        active: {
          type: 'boolean'
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
  
  export default templateMapping;
  