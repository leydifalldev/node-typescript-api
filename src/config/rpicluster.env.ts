export default {
  app: {
    port: 3000
  },
  elasticsearch: {
    protocol: "http",
    host: 'rpi-node-1',
    port: 9200,
    name: 'rpi-es-cluster',
    options: {}
  }
};