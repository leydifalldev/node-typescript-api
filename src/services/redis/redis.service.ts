const redis = require("redis");
const jwt = require('jsonwebtoken');
import { redisConf } from "../../config/redis.config";

export const RedisService = () => {
  const rediscl = redis.createClient(redisConf);
  rediscl.on("connect", function () {
      console.log("Redis plugged in.");
  });
  return rediscl;
}
