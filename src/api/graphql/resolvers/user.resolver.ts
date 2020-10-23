import { ApolloError } from "apollo-server";
import UserStore from "../../../services/user/user.service";
import cloudinary from "../../../services/uploader/cloudinary.config";
import { RepositoryResponse } from "../../../defs";
import AccountService from "../../../services/account/account.service";

export const UserQuery = {
  searchUser: async (root, args) => {
    const response = await UserStore.search(args);
    console.log("response resolver", response);
    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },

  getUser: async (root, args) => {
    const response = await UserStore.get({id: args.userid});
    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  }, 

  getAccount: async (root, args) => {
    const accountService = new AccountService();
    const response: RepositoryResponse = await accountService.getAccount(args.query);
    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, String(response.status));
  }, 
  /*getUserByEmail: async (root, args) => {
    const response = await UserStore.getProfileByEmail(args.email);
    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  }*/
};

export const UserMutation = {
  login: async (root, args) => {
    const response = await UserStore.login(args);
    console.log("Response log resolver", response);
    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, String(response.status));
  },

  createUser: async (root, args) => {
    const response: RepositoryResponse = await UserStore.createUser(args.user);
    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, String(response.status));
  },

  updateUser: async (root, args) => {
    const {
      user: { id, ...userBody }
    } = args;
    const response = await UserStore.update({id, record: userBody});
    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },

  deleteUser: async (root, args) => {
    const response = await UserStore.delete(args.userid);
    if (response.status === 200) {
      return response.payload;
    }
    return new ApolloError(response.error, response.status);
  },

  // uploadPictureUser: async (root, params) => {
  //   const { filename, createReadStream } = await params.picture;

  //   try {
  //     const result: any = await new Promise((resolve, reject) => {
  //       const eager = [
  //         {
  //           width: 200,
  //           height: 150,
  //           crop: "scale",
  //           format: "jpg"
  //         },
  //         {
  //           width: 400,
  //           height: 300,
  //           crop: "scale",
  //           format: "jpg"
  //         }
  //       ];
  //       createReadStream().pipe(
  //         cloudinary.uploader.upload_stream(
  //           { tags: "basic_sample", eager },
  //           (error, result) => {
  //             if (error) {
  //               reject(error);
  //             }
  //             resolve(result);
  //           }
  //         )
  //       );
  //     });
  //     console.log(result);
  //     //const { eager } = result;
  //     //const pictures = eager.map(p => p.secure_url)
  //     const picture = {
  //       small: result.eager[0].secure_url,
  //       big: result.eager[1].secure_url
  //     };
  //     console.log("pictures log", picture);
  //     const response = await UserStore.addPictures(params.userid, picture);
  //     if (response.status === 200) {
  //       return response.payload;
  //     }
  //     return new ApolloError(response.error, response.status);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },

  // addPicturesUser: async (parent, params) => {
  //   console.log("multiUpload params log", params);
  //   const response = await UserStore.addPictures(
  //     params.userid,
  //     params.pictures
  //   );
  //   if (response.status === 200) {
  //     return response.payload;
  //   }
  //   return new ApolloError(response.error, response.status);
  // }
};
