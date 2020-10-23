export const serializeNotationLink = (linkindex, payload) => {
  const linkCommit = {};
  linkCommit["refresh"] = true;
  linkCommit["body"] = [
    {
      update: {
        _id: payload.userid,
        _index: linkindex
      }
    },
    { doc: { userid: payload.userid, placeid: payload.placeid, notation: payload.notation, LAST_UPDATE_DATE: new Date()}, 
      doc_as_upsert: true
    }
  ];

  return linkCommit;
}

export const serializeNotationEntity = (index, payload) => {
  const entityCommit = {};
  console.log("payload LOG", payload);
  entityCommit["refresh"] = true;
  entityCommit["body"] = [
    {
      update: {
        _id: payload.placeid,
        _index: index
      }
    },
    { 
      script: { 
        source: "if (ctx._source.ranking == null) { ctx._source.ranking = [ 'likes': 0, 'notation': 0, 'total': 0, 'votes': 0 ] } if (ctx._source.ranking.notation == null || ctx._source.ranking.votes == null || ctx._source.ranking.total == null) { ctx._source.ranking.notation = 0; ctx._source.ranking.votes = 0; ctx._source.ranking.total = 0; } ctx._source.ranking.total = ctx._source.ranking.total + params.notation; ctx._source.ranking.votes++; ctx._source.ranking.notation = ctx._source.ranking.total / ctx._source.ranking.votes; ctx._source.LAST_UPDATE_DATE = params.now;", 
        params: {
          notation: payload.notation,
          now: new Date()
        }, 
        lang: "painless" 
      },
      scripted_upsert: true 
    }
  ];

  return entityCommit;
}