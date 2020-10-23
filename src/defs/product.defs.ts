import { 
  IContact,
  ICoordinate,
  IPicture,
  IRanking,
  ISeller,
  ILocation,
  IKeyValue
} from "./global.defs";

export interface IProductCollection {
  id: string;
  name: string;
  cardType: string;
}

export interface IProductCategory {
  id: string;
  name: string;
  cardType: string;
}

export interface IProductInput {
  id: string;
  name: string;
  sellerid: string;
  cardType: string;
  category: IProductCategory;
  collection: IProductCollection;
  gastronomies: string[];
  recipes: string[];
  spicy: string;
  src: string;
  tags: string[];
  price: number;
  discount: number;
  quantity: number;
  size: string;
  description: string;
  contact: IContact;
  address: ILocation;
  ranking: IRanking;
  location: ICoordinate;
  pictures: IPicture[];
  hasmenu: Boolean;
}

export interface IProductSeller {
  id: string;
  name: string;
  email?: string;
  phone: string;
  address: string;
  zone: string;
  district: string;
  ocean: boolean;
  country: string;
  ranking?: IRanking;
  coordinates?: ICoordinate;
}

export interface IProduct {
  id: string;
  name: string;
  category: IKeyValue[];
  collection: IKeyValue;
  gastronomy: string;
  recipes?: string[];
  spicy?: string;
  src?: string;
  tags?: string[];
  price: number;
  currency?: string;
  discount?: number;
  quantity?: number;
  size?: string;
  stock?: boolean;
  description?: string;
  pictures?: IPicture[];
  ranking: IRanking;
  hasmenu?: Boolean;
  seller: IProductSeller;
  CREATED_AT?: string;
  LAST_UPDATE_DATE?: string;
  LAST_UPDATE_USER?: string;
}