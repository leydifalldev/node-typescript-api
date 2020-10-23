POST /product/_search
{
  "query": {
    "bool": {
      "must": {
        "term": {
          "placeid": "IFladG4BPKIsN-IUkHva"
        }
      }
    }
  },
  "aggs": {
      "categories_group": {
        "terms": {
          "field": "categories",
          "size": 10
        },
        "aggs": {
          "collection": {
            "terms": {
              "field": "collection"
            }
          }
        }
      }
    }
}

PUT /product_v2 
{
  "settings": {
      "index": {
        "number_of_shards": 3,
        "number_of_replicas": 2
      }
    },
  "mappings": 
  {
  "properties":{
    "id":{"type":"keyword"},
    "name":{"type":"keyword"},
    "categories":{"type":"keyword"},
    "gastronomy":{"type":"keyword"},
    "collection":{"type":"keyword"},
    "tags":{"type":"keyword"},
    "recipes":{"type":"keyword"},
    "description":{"type":"text"},
    "spicy":{"type":"keyword"},
    "price":{"type":"float"},
    "currency":{"type":"keyword"},
    "stock":{"type":"boolean"},
    "discount":{"type":"float"},
    "quantity":{"type":"float"},
    "size":{"type":"keyword"},
    "ranking":{
      "type":"object",
      "properties":{
        "notation":{"type":"float"},
        "likes":{"type":"integer"},
        "total":{"type":"integer"},
        "votes":{"type":"integer"}
      }
    },
    "seller":{
      "type":"object",
      "properties":{
        "id":{"type":"keyword"},
        "name":{"type":"keyword"},
        "phone":{"type":"keyword"},
        "email":{"type":"keyword"},
        "logo":{"type":"keyword"},
        "country":{"type":"keyword"},
        "zone":{"type":"keyword"},
        "district":{"type":"keyword"},
        "coordinates":{"type":"geo_point"},
        "address":{"type":"text"},
        "ocean":{"type":"boolean"},
        "ranking":{
          "type":"object",
          "properties":{
            "notation":{"type":"float"},
            "likes":{"type":"integer"},
            "total":{"type":"integer"},
            "votes":{"type":"integer"}
          }
        }
      }
    },
    "hasmenu":{"type":"boolean"},
    "account":{"type":"keyword"},
    "pictures":{
      "type":"object",
      "properties":{
        "id":{"type":"keyword"},
        "position":{"type":"integer"},
        "mobile":{"type":"keyword"},
        "desktop":{"type":"keyword"}
      }
    },
    "UIMETA":{"type":"object","properties":{"positionInCatalog":{"type":"integer"}}},
    "ENABLED":{"type":"boolean"},
    "CREATED_AT":{"type":"date"},
    "LAST_UPDATE_DATE":{"type":"date"},
    "LAST_UPDATE_USER":{"type":"keyword"}
  }
}
}

POST /_reindex
{
  "source":{
    "index": "product"
  },
  "dest": {
    "index": "product_v2"
  }
}

POST /_aliases
{
  "actions": [
    {
      "add": {
        "alias": "product",
        "index": "product_v2"
      }
    }
  ]
}

GET /product/_search