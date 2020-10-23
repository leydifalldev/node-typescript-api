export interface ITokens {
    accessToken: string;
    refreshToken: string;
}

export interface IAccount {
    id?: string;
    userid?: string;
    roles?: String[];
    accessToken?: string;
    refreshToken?: string;
}