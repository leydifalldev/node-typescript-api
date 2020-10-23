const logsMapping = {
    index: 'logs',
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
        userid: {
          type: 'keyword'
        },
        status: {
          type: 'integer',
        },
        module: {
          type: 'keyword',
        },
        moduleType: {
          type: 'keyword',
        },
        method: {
          type: 'keyword',
        },
        msg: {
          type: "text"
        }
      },
    },
  };
  
  export default logsMapping;
  