export default {
  toListResponse: (result) => {
    const {
      body: { hits }, statusCode
    } = result;
    const data = hits.hits.map(hit => {
      hit._source.id = hit._id;
      return { id: hit._id, ...hit._source };
    });
    return {
      status: statusCode,
      error: null,
      payload: {
        total: hits.total.value,
        data: data
      }
    };
  },

  toPaginateResponse: (result) => {
    const {
      body: { hits }, statusCode
    } = result;
    const data = hits.hits.map(hit => {
      hit._source.id = hit._id;
      return { id: hit._id, ...hit._source };
    });
    return {
      status: statusCode,
      error: null,
      payload: {
        total: hits.total.value,
        data: data
      }
    };
  },

  toArrayContent: (result) => {
    const {
      body: { hits }, statusCode
    } = result;
    const data = hits.hits.map(hit => {
      hit._source.id = hit._id;
      return { id: hit._id, ...hit._source };
    });
    return {
      status: statusCode,
      error: null,
      payload: data
    };
  },

  toCMSResponse: (result, filter) => {
    const {
      body: { hits }, statusCode
    } = result;
    const data = hits.hits.map(hit => {
      hit._source.id = hit._id;
      console.log("toCMSResponse LOG", hit._source.CMS.filter(item => item.id == filter)[0].order);
      return { id: hit._id, ...hit._source, order: hit._source.CMS.filter(item => item.id == filter)[0].order };
    });
    return {
      status: statusCode,
      error: null,
      payload: data
    };
  },

  toKeyValue: (result) => {
    const list = {};
    const { body: { docs } } = result;
    docs.map(hit => {
      list[hit._id] = hit._source;
    });

    return list;
  },
  //ONLY FOR UPDATE
  toBoolResponse: (id, result) => (result.body.result === "updated"),
  //ONLY FOR UPDATE
  toReturnRecord: (id, result) => (result.body && result.body.get && { ...result.body.get._source, id }),
  toProductCardList: (result) => {
    const {
      body: { hits }, statusCode
    } = result;
    const data = hits.hits.map(hit => {
      hit._source.id = hit._id;
      return {
        id: hit._id,
        primary: hit.name,
        secondary: hit.recipes && hit.recipes.join("-"),
        quaternary: hit.price,
        src: hit.src,
        ...hit._source
      };
    });
    return {
      status: statusCode,
      error: null,
      payload: {
        total: hits.total.value,
        data: data
      }
    };
  }
}

export const createParsers = {
  toBoolResponse: (result) => {
    console.log(result);
    return (result.body.failures && (result.body.failures.length < 1))
  },
}

export const updateParsers = {
  toBoolResponse: (id, result) => (result.body.result === "updated"),
  //ONLY FOR UPDATE
  toReturnRecord: (id, result) => (result.body && result.body.get && { ...result.body.get._source, id }),
  toProductCardList: (result) => {
    const {
      body: { hits }, statusCode
    } = result;
    const data = hits.hits.map(hit => {
      hit._source.id = hit._id;
      return {
        id: hit._id,
        primary: hit.name,
        secondary: hit.recipes && hit.recipes.join("-"),
        quaternary: hit.price,
        src: hit.src,
        ...hit._source
      };
    });
    return {
      status: statusCode,
      error: null,
      payload: {
        total: hits.total.value,
        data: data
      }
    };
  }
}

export const searchParsers = {
  toListResponse: (result, params) => {
    const {
      body: { hits }, statusCode
    } = result;
    const data = hits.hits.map(hit => {
      hit._source.id = hit._id;
      return { id: hit._id, ...hit._source };
    });
    return {
      status: statusCode,
      error: null,
      payload: {
        total: hits.total.value,
        data: data
      }
    };
  },

  toPaginateResponse: (result, params: any) => {
    const {
      body: { hits }, statusCode
    } = result;
    const data = hits.hits.map(hit => {
      hit._source.id = hit._id;
      return { id: hit._id, ...hit._source };
    });
    return {
      status: statusCode,
      error: null,
      payload: {
        total: hits.total.value,
        data: data
      }
    };
  },

  toSingle: (result, params) => {
    const {
      body: { hits }, statusCode
    } = result;
    const data = hits.hits.map(hit => {
      hit._source.id = hit._id;
      return { id: hit._id, ...hit._source };
    });

    return {
      status: statusCode,
      error: null,
      payload: data[0] || null
    };
  },

  toArrayContent: (result, params) => {
    const {
      body: { hits }, statusCode
    } = result;
    const data = hits.hits.map(hit => {
      hit._source.id = hit._id;
      return { id: hit._id, ...hit._source };
    });
    return {
      status: statusCode,
      error: null,
      payload: data
    };
  },

  toCMSResponse: (result, params) => {
    const { id } = params;
    const {
      body: { hits }, statusCode
    } = result;
    const data = hits.hits.map(hit => {
      hit._source.id = hit._id;
      console.log("toCMSResponse LOG", hit._source.CMS.filter(item => item.id == id)[0].order);
      return { id: hit._id, ...hit._source, order: hit._source.CMS.filter(item => item.id == id)[0].order };
    });
    return {
      status: statusCode,
      error: null,
      payload: data
    };
  },

  toKeyValue: (result) => {
    const list = {};
    const { body: { docs } } = result;
    docs.map(hit => {
      list[hit._id] = hit._source;
    });

    return list;
  },
}

export const mgetParser = {
  toArrayContent: (result) => {
    const {
      body: { docs }, statusCode
    } = result;
    const data = docs.map(hit => {
      hit._source.id = hit._id;
      return { id: hit._id, ...hit._source };
    });
    return {
      status: statusCode,
      error: null,
      payload: data
    };
  },

  toPictureIds: (result) => {
    let ids = [];
    const {
      body: { docs }, statusCode
    } = result;
    docs.map(hit => {
      const pictures = hit._source && hit._source.pictures;
      if (pictures && Array.isArray(pictures)) {
        return pictures.map(picture => {
          ids.push(picture.id);
        });
      }
    });

    return {
      status: statusCode,
      error: null,
      payload: ids
    };
  },

  toPictureIdsAndPlaceIds: (result) => {
    let ids = [];
    let sellerIds = []
    const {
      body: { docs }, statusCode
    } = result;
    docs.map(hit => {
      const pictures = hit._source && hit._source.pictures;
      const sellerIds = hit._source
        && hit._source.seller
        && hit._source.seller.id;
      sellerIds.push(hit._source.sell);
      if (pictures && Array.isArray(pictures)) {
        return pictures.map(picture => {
          ids.push(picture.id);
        });
      }
    });

    return {
      status: statusCode,
      error: null,
      payload: ids
    };
  },

  toKeyValue: (result) => {
    const list = {};
    const { body: { docs } } = result;
    docs.map(hit => {
      list[hit._id] = hit._source;
    });

    return list;
  },
}

export const getParser = {
  toObject: (result) => {
    const { body: { _source }, statusCode
    } = result;
    return {
      status: statusCode,
      error: null,
      payload: _source
    };
  },
}
