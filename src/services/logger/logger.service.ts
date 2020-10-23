import { ElasticService } from "../elastic/elastic.service";
import { EventEmitter } from "events";
import logsMapping from "./logger.mapping";
import { ILogs } from "../../defs";
import { Alert } from "./console.printer";
import httpCodes from "./http.codes";

interface IErrorHandler {
  source?: string;
  error: any;
  module?: string;
  moduleType: string;
  method?: string;
}

class Logger extends ElasticService {
  constructor() {
    super("logs", logsMapping);
  }

  log(params: ILogs) {
    console.log(`FAILED ===> Component: ${params.component || "NR"} - ComponentType: ${params.componentType} - Method: ${params.method} - Status: ${params.status} - Message: ${params.message}`)
    this.emit("ErrorChain", { record: params });
  }

  error(e: IErrorHandler) {
    let response;
    const { module, error } = e;
    console.log("ERROR LOGGG =====> ", e);

    if (error.meta) {
      const { meta: { body, statusCode } } = error;
      Alert.error({ module, status: statusCode, msg: body });
      response = { status: statusCode, error: httpCodes[statusCode], payload: null }
    } 
    
    else if (error.type === "standard") {
      const msgError = error.msg || httpCodes[error.status];
      Alert.error({ module, status: error.status, msg: error.msg });
      response = { status: error.status, error: error.msg, payload: null }
    }
    else {
      response = { status: 500, payload: null };
    }
    console.log("response LOG", response);
    return response;
  }
}


const errorHandler = (params: IErrorHandler) => {

}

export default new Logger();
