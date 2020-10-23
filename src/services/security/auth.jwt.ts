
import * as jwt from "jsonwebtoken";
import { ApolloError, AuthenticationError } from "apollo-server";
import { AUTH } from "../../config/security";
import { ITokens, IAccount } from "../../defs";
import AccountService from "../../services/account/account.service";

export const validateAccessToken = async (token) => {
  try {
    const user = await jwt.verify(token, AUTH.SECRET_ACCESS);
    console.log('getUserByToken login', user);
    return { status: 200, error: false, payload: user};
  } catch(e) {
    return { status: 401, error: 'Failed to authenticate token.', payload: false}
  }
};

export const validateRefreshToken = async (token) => {
  try {
    const user = await jwt.verify(token, AUTH.SECRET_REFRESH);
    console.log('getUserByToken login', user);
    return { status: 200, error: false, payload: user};
  } catch(e) {
    return { status: 401, error: 'Failed to authenticate token.', payload: false}
  }
};

export const securityMiddleControl = async (req, res, next) => {
  const refreshToken = req.headers["x-refresh-token"];
  const accessToken = req.headers["x-access-token"];
  if (!accessToken && !refreshToken) return next();
  const decodedAccessToken: any = validateAccessToken(accessToken);

  if (decodedAccessToken && decodedAccessToken.user) {
    req.user = decodedAccessToken.user;
    return next();
  }

  const decodedRefreshToken: any = validateRefreshToken(refreshToken);

  if (decodedRefreshToken && decodedRefreshToken.user) {
    const accountService = new AccountService();
    const { id } = decodedRefreshToken.user;
    const account: IAccount = await accountService.checkAndRefreshAccessToken(id, refreshToken);
    req.user = account;
    res.set({
      "Access-Control-Expose-Headers": "x-access-token,x-refresh-token",
      "x-access-token": account.accessToken,
      "x-refresh-token": account.refreshToken
    });
    return next();
  }

  next();
}

export const setTokens = (user): ITokens => {
  const accessUser = {
    id: user.id,
    roles: user.roles
  };

  const refreshUser = {
    id: user.id,
    roles: user.roles,
    count: user.tokenCount
  };

  const accessToken: string = jwt.sign(
    { user: accessUser }, 
    AUTH.SECRET_ACCESS, 
    { expiresIn: AUTH.EXPIRES_IN });

  const refreshToken: string = jwt.sign(
    { user: refreshUser },
    AUTH.SECRET_REFRESH,
    {
      expiresIn: AUTH.REFRESH_EXPIRES_IN
    }
  );

  return { accessToken, refreshToken };
}

export const refreshAccessToken = (user) => {
  const accessUser = {
    id: user.id,
    roles: user.roles
  };
  const accessToken: string = jwt.sign(
    { user: accessUser }, 
    AUTH.SECRET_ACCESS, 
    { expiresIn: AUTH.EXPIRES_IN });
  return accessToken;
}