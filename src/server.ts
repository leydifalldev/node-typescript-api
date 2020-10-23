import * as express from "express";
import * as bodyParser from "body-parser";
import { EventEmitter } from "events";
import ElasticClient from "./services/elastic/elastic.client";
const PORT = process.env.PORT || 5000;
//import { apollo } from "./api";
import MongoService from "./services/mongo/mongo.service";
//import { securityMiddleControl } from "./services/security/auth.jwt";
import PGRepository from "./services/postgresql/postgresql.repository";
console.log("PORT LOG", PORT);

class Server extends EventEmitter {
  public app: express.Application;

  constructor() {
    super();
    ElasticClient.connect();
    this.app = express();
    this.config();
  }

  private config(): void {
    this.app.use(bodyParser.json({ limit: '50mb'}));
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    //this.app.use(securityMiddleControl);
    //PGRepository.connect();
    ElasticClient.getObservable().subscribe(value => {
      console.log(value)
      this.app.listen(PORT, () => console.log(`🟢 Server listening on port ${PORT}!`))
      require('./api/graphql').apollo.applyMiddleware({ app: this.app, path: "/graphql" });
    });
  }
}

new Server();