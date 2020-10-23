import { Client } from "@elastic/elasticsearch";
import { Observable } from "rxjs";

class ElasticClient {
  private esclient;
  static databaseClient: any;

  constructor() {
    ElasticClient.databaseClient = Observable.create(observer => this.waitConnection(observer));
  }

  getObservable() {
    return ElasticClient.databaseClient;
  }

  getClient() {
    return this.esclient;
  }

  async connect() {
    const { ES_PROTOCOL, ES_HOST, ES_PORT } = process.env;
    const uri = `${ES_PROTOCOL}://${ES_HOST}:${ES_PORT}`;
    console.log("uri LOG", uri);
    try {
      this.esclient = new Client({
        node: uri,
        maxRetries: 0,
      });
      return Observable.create(observer => this.waitConnection(observer));
    } catch (e) {
      console.log("🔴 No connection to Elasticsearch =====> ", e);
    }
  }

  async waitConnection(observer) {
    try {
      const { body } = await this.esclient.ping();
      if (body) {
        observer.next("🟢 Connection to elasticsearch established");
        return true;
      }
    } catch (e) {
      console.log("🟡 Waiting Elastic Connection .......");
      await this.sleep(5000);
      this.waitConnection(observer);
    }
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export default new ElasticClient();