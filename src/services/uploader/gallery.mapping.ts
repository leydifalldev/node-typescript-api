const galleryMapping = {
  index: "gallery",
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
      provider: {
        type: "keyword"
      },
      LargeCardM: {
        type: "keyword"
      },
      LargeCardL: {
        type: "keyword"
      },
      SquareCardM: {
        type: "keyword"
      },
      SquareCardL: {
        type: "keyword"
      },
      SquareCardXL: {
        type: "keyword"
      },
      RoundedCardM: {
        type: "keyword"
      },
    },
  },
}

export default galleryMapping;