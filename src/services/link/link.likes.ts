export const serializeLikesLink = (linkindex, payload) => {
  const linkCommit = {};
  linkCommit["refresh"] = true;
  linkCommit["body"] = [
    {
      update: {
        _id: payload.userid,
        _index: linkindex
      }
    },
    { doc: { userid: payload.userid, like: true, LAST_UPDATE_DATE: new Date()}, 
      doc_as_upsert: true
    }
  ];

  return linkCommit;
};

export const serializeLikesEntity = (index, entityid) => {
  const entityCommit = {};
  entityCommit["refresh"] = true;
  entityCommit["body"] = [
    {
      update: {
        _id: entityid,
        _index: index
      }
    },
    { 
      script: { 
        source: "if (ctx._source.ranking == null) { ctx._source.ranking = [ 'likes': 0, 'notation': 0, 'total': 0, 'votes': 0 ] } if (ctx._source.ranking.likes == null) { ctx._source.ranking.likes = 0 } ctx._source.ranking.likes++; ctx._source.LAST_UPDATE_DATE = params.now;", 
        params: {
          now: new Date()
        }, 
        lang: "painless" 
      },
      scripted_upsert: true 
    }
  ];

  return entityCommit;
}