import profileMapping from "./profile.mapping";
import { ElasticService } from "../elastic/elastic.service";
import { Uploader } from "../uploader/upload.service";
//import { LinkProfileProductStore } from "./profile.link.product.service";
//import { LinkProfilePlaceStore } from "./profile.link.place.service";
//import { LinkProfileEventStore } from "./profile.link.event.service";
import AccountService from "../account/account.service";
import { setTokens } from "../security/auth.jwt";
import { RepositoryResponse, ITokens } from "../../defs";
import Logger from "../logger/logger.service";

class UserStore extends ElasticService {
  private readonly saltRounds: number = 10;
  public index = "profile";
  accountService: AccountService;
  private uploader = new Uploader();
  constructor() {
    super("profile", profileMapping);
    //this.linkProduct = new LinkProfileProductStore();
    //this.linkPlace = new LinkProfilePlaceStore();
    //this.linkEvent = new LinkProfileEventStore();
    this.accountService = new AccountService();
  }

  async login(params): Promise<RepositoryResponse> {
    const response = await this.accountService.authenticate(params);
    if (response.status === 200) {
      const user = response.payload;
      const tokens: ITokens = setTokens({ id: user.userid, roles: user.roles });
      if (tokens.refreshToken && tokens.accessToken) {
        const response = await this.accountService.saveTokens({ userid: user.userid, accessToken: tokens.accessToken, refreshToken: tokens.refreshToken });
        console.log("accountService.saveTokens response LOG", response);
        return response;
      }
      Logger.error({
        module: "UserStore",
        moduleType: "Repository",
        method: "login",
        error: {
          status: 500,
          msg: String(response.error)
        }
      });
      return {
        status: 500,
        error: "INTERNAL_ERROR",
        payload: false
      }
    }
    console.log("response login LOG", response);
    return response;
  }

  async createUser(user, provider = 'Basic'): Promise<RepositoryResponse> {
    const { password, ...profile } = user;

    try {
      const response = await this.verifyUserByEmail(profile.contact.email);
      if (response.status === 404) {
        const response = await this.add({
          record: profile,
          options: {
            ranking: true
          }
        });

        if (response.status === 200) {
          return await this.accountService.create({
            userid: response.payload,
            username: profile.fullname,
            email: profile.contact.email,
            roles: profile.roles,
            password,
            provider
          });
        }
        return response;
      }
      return response;
    } catch (e) {
      console.log("Register failed ====> ", e);
      return {
        status: 500,
        error: "INTERNAL_ERROER",
        payload: false
      };
    }
  }

  async addPictures(userid, pictures) {
    console.log("addPictures", pictures);
    try {
      const upload = await this.uploader.upload(pictures);
      if (upload.status === 200) {
        const commits = await this.uploader.commitToElastic(
          "profile",
          userid,
          upload.payload
        );
        //const response = await this.bulkAction(commits);
        return {
          status: 503,
          error: "SERVICE_UNAVAILABLE",
          payload: null
        };
      }
      return upload;
    } catch (e) {
      console.log("FAILED TO ADD PICTURE =====> ", e);
      return {
        status: 500,
        error: "FAILED TO ADD PICTURE",
        payload: false
      };
    }
  }

  async aggUserByZone() {
    const req = {
      index: "profile",
      body: {
        aggs: {
          group: {
            terms: {
              field: "location.zone",
              size: 10
            }
          }
        }
      }
    };

    try {
      const { body, statusCode } = await this.esclient.search(req);
      console.log("req LOGGGGGG");
      console.log(body.aggregations.group.buckets);
      const resp = body.aggregations.group.buckets.map(group => {
        return {
          name: group.key,
          value: group.doc_count
        };
      });
      return {
        payload: resp,
        status: statusCode,
        error: "NONE"
      };
    } catch (e) {
      return {
        payload: false,
        status: 500,
        error: "DATABASE ERROR"
      };
    }
  }

  async verifyUserByEmail(email, fields = []) {
    const req = {
      criteria: [
        {
          name: "contact.email",
          value: email
        }
      ],
      fields
    };

    try {
      const { status, error, payload } = await this.search(req);

      if (payload.total > 1) {
        return {
          status: 409,
          error: "CONFLICTS: Many users found by this email",
          payload
        };
      } else if (payload.total === 0) {
        return {
          status: 404,
          error: "NOT FOUND: User doesn't exist",
          payload: {
            total: 0,
            data: []
          }
        };
      } else if (status === 200 && payload.total === 1) {
        return {
          status: 409,
          error: "CONFLICTS: User exists",
          payload: {
            total: 0,
            data: payload.data
          }
        };
      } else {
        return {
          status: 500,
          error: "INTERNAL ERROR: UserService cannot handle Response",
          payload: payload.data[0]
        };
      }
    } catch (e) {
      console.log(e);
      return {
        status: e.statusCode,
        error: "INTERNAL ERROR",
        payload: false
      };
    }
  }
}

export default new UserStore();
