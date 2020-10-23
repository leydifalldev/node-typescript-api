const catcolMapping = {
  index: 'catcol',
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
      id: {
        type: 'keyword',
      },
      name: {
        type: 'keyword',
      },
      type: {
        type: "keyword",
      },
      join: {
        type: 'join',
        relations: {
          "categoryType": "category",
          "category": "collection"
        },
      },
      owner: {
        type: "keyword"
      },
      src: {
        type: "keyword"
      },
      cardType: {
        type: 'keyword',
      },
      ENABLED: {
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

export default catcolMapping;
