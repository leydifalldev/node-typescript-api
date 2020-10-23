import rpicluster from "./rpicluster.env";
import production from "./production.env";
import development from "./development.env";

const env = process.env.NODE_ENV || 'development'; // 'dev' or 'test'

const config = {
  rpicluster,
  development,
  production
};

export default config[env];