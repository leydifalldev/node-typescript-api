export default {
  app: {
    port: 5000
  },
  elasticsearch: {
    protocol: "http",
    host: 'elastic_01',
    port: 9200,
    name: 'dev-cluster',
    options: {}
  }
};