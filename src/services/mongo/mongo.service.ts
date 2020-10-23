import * as mongoose from "mongoose";
import Logger from "../logger/logger.service";

var options = {

  db: {
      native_parser: true
  },

  // This block gets run for a non replica set connection string (eg. localhost with a single DB)
  server: {
      poolSize: 5,
      reconnectTries: Number.MAX_VALUE,
      ssl: false,
      sslValidate: false,
      socketOptions: {
          keepAlive: 1000,
          connectTimeoutMS: 30000
      }
  },

  // This block gets run when the connection string indicates a replica set (comma seperated connections)
  replset: {
      auto_reconnect: false,
      poolSize: 10,
      connectWithNoPrimary: true,
      socketOptions: {
          keepAlive: 1000,
          connectTimeoutMS: 30000
      }
  }
};

class MongoService {
  constructor() {
    this.connect();
  }

  async connect() {
    console.log("process.env.DKV_MONGO", process.env.DKV_MONGO);
    console.log("process.env.DKV_MONGO_2", process.env.DKV_MONGO_2);
    console.log("process.env.DKV_MONGO_3", process.env.DKV_MONGO_3);
    try {
      const client = await mongoose
      .connect(`mongodb://${process.env.DKV_MONGO},${process.env.DKV_MONGO_2},${process.env.DKV_MONGO_3}/?replicaSet=rs0`, options)
      console.log("Database connection successful", client.connections);
    } catch (err){
      Logger.error({
        module: "MongoService", 
        moduleType: "DatabaseService",
        method: "connect", 
        error: {
          status: 500, 
          msg: String("Failed to connect to mongodb")
        }
      });
    }
  }
}

export default MongoService;
