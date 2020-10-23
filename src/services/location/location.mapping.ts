const locationMapping = {
  index: 'location',
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
      name: {
        type: 'keyword',
      },
      label: {
        type: 'keyword',
      },
      collection: {
        type: 'keyword',
      },
      category: {
        type: 'keyword',
      },
      position: {
        type: 'integer'
      },
      parent: {
        type: 'object',
        properties: {
          id: {
            type: 'keyword',
          },
          name: {
            type: 'keyword',
          },
        },
      },
    },
  },
};

export default locationMapping;
