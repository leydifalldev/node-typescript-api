import { ElasticService } from "../elastic/elastic.service";
import collectionMapping from "./collection.mapping";

class CollectionRepository extends ElasticService {
  constructor() {
    super("collection", collectionMapping);
  }
}

export default new CollectionRepository();