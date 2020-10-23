import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import Account from "./account.model";
import Logger from "../logger/logger.service";
import { refreshAccessToken } from "../security/auth.jwt";
import { RepositoryResponse, IAccount } from "../../defs";

class AccountService {
  account: any;
  saltRounds: number;
  constructor() {
    this.account = Account;
    this.saltRounds = 10;
  }

  async getAccount(query, fields = null) {
    try {
      const account = await this.account.findOne(query, fields);
      if (account) {
        console.log("account");
        console.log(account);
        return {
          payload: account,
          error: "none",
          status: 200
        };
      }
      console.log("getAccount findOne", account);
      return {
        payload: false,
        error: "Account is not exist",
        status: 404
      };
    } catch (e) {
      console.log(e);
      return {
        payload: false,
        error: "DATABASE_ERROR",
        status: 500
      };
    }
  }

  async create(account) {
    try {
      const newAccount = new Account(account);
      const response = await newAccount.save();
      console.log("create LOG", response);
      return {
        status: 200,
        payload: response.userid,
        error: "none"
      };
    } catch (e) {
      console.log("Creation Account Failed ===> ", e);
      return {
        status: 500,
        payload: "none",
        error: e
      };
    }
  }

  async saveTokens({ userid, accessToken, refreshToken }): Promise<RepositoryResponse> {
    try {
      const result = await this.account.findOneAndUpdate({ userid }, { accessToken, refreshToken }, {
        new: true,
        upsert: true // Make this update into an upsert
      });
      if (result) {
        return {
          status: 200,
          payload: { accessToken, refreshToken },
          error: "NONE"
        }
      }

      Logger.error({
        module: "AccountService",
        moduleType: "Service",
        method: "saveTokens", error: {
          status: 500,
          msg: "Empty Response for store token"
        }
      });

      return {
        status: 500,
        payload: false,
        error: "DATABASE_ERROR"
      }
    } catch (e) {
      Logger.error({
        module: "AccountService",
        moduleType: "Service",
        method: "saveTokens",
        error: {
          status: 500,
          msg: String(e)
        }
      });
      return {
        status: 500,
        payload: false,
        error: "DATABASE_ERROR"
      }
    }
  }

  async updateAccount(query, params): Promise<RepositoryResponse> {
    try {
      const result = await this.account.findOneAndUpdate(query, params, {
        new: true,
        upsert: true // Make this update into an upsert
      });

      if (result) {
        return {
          status: 200,
          payload: result,
          error: "NONE"
        }
      }

      Logger.error({
        module: "AccountService",
        moduleType: "Service",
        method: "updateAccount",
        error: {
          status: 500,
          msg: "Empty Response for store token"
        }
      });

      return {
        status: 500,
        payload: false,
        error: "DATABASE_ERROR"
      }
    } catch (e) {
      Logger.error({
        module: "AccountService",
        moduleType: "Service",
        method: "updateAccount",
        error: {
          status: 500,
          msg: String(e)
        }
      });
      return {
        status: 500,
        payload: false,
        error: "DATABASE_ERROR"
      }
    }
  }

  async checkAndRefreshAccessToken(userid, refreshToken): Promise<IAccount> {
    const response: RepositoryResponse = await this.getAccount({ userid, refreshToken }, "userid roles refreshToken");
    console.log("user refresh decoded", response);
    if (response.status === 200) {
      const accessToken: string = refreshAccessToken(response.payload);
      const { payload } = await this.updateAccount({ userid }, { accessToken });

      return { userid: payload.userid, roles: payload.roles, refreshToken: payload.refreshToken, accessToken: payload.accessToken };
    }
  }

  async authenticate({ email, password }) {
    try {
      const account = await this.account.findOne({ email }).exec();
      if (!account) {
        return {
          status: 404,
          payload: false,
          error: "The username does not exist"
        }
      }
      const response = account.comparePassword(password, (error, isMatched) => {
        if (isMatched) {
          return {
            status: 200,
            payload: account,
            error: false
          }
        } else {
          return {
            status: 403,
            payload: false,
            error: "Invalid Password"
          }
        }
      });
      return response;
    } catch (e) {
      console.log(e);
    }
  }
}

export default AccountService;