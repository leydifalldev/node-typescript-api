const profileMapping = {
  index: "profile",
  type: "profile",
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
        type: "text"
      },
      fullname: {
        type: "text"
      },
      firstname: {
        type: "text"
      },
      lastname: {
        type: "text"
      },
      artistname: {
        type: "text"
      },
      gender: {
        type: "keyword"
      },
      contact: {
        type: "object",
        properties: {
          email: {
            type: "keyword"
          },
          phone: {
            type: "keyword"
          }
        }
      },
      description: {
        type: "text"
      },
      birthdate: {
        type: "date"
      },
      location: {
        type: "object",
        properties: {
          address: {
            type: "keyword"
          },
          zone: {
            type: "keyword"
          },
          location: {
            type: "geo_point"
          },
          country: {
            type: "keyword"
          }
        }
      },
      tags: {
        type: "text"
      },
      roles: {
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
      },
      logo: {
        type: "keyword"
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
      facebook: {
        type: "keyword"
      },
      twitter: {
        type: "keyword"
      },
      CREATED_AT: {
        type: "date"
      },
      LAST_UPDATE_DATE: {
        type: "date"
      },
      LAST_UPDATE_USER: {
        type: "keyword"
      }
    }
  }
};

export default profileMapping;
