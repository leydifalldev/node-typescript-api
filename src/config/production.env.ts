export default {
  app: {
    port: 5000
  },
  elasticsearch: {
    protocol: "http",
    host: 'elasticsearch-rest',
    port: 9200,
    name: 'production-cluster',
    options: {}
  }
};