import { Pool } from "pg";
import { EventEmitter } from "events";
import config from "./pool.config";

class PGRepository extends EventEmitter {
  pool: Pool;

  constructor() {
    super();
    this.pool = new Pool(config);
    console.log("PGRepository config log", config);
  }

  async connect() {
    try {
      const client = await this.pool.connect();
      console.log("PGRepository connect success", client);
    } catch(e) {
      console.log("PGRepository connect failed", e);
    }
  }

}

export default new PGRepository();
