export interface IContact {
  phone?: string;
  email?: string; 
}

export interface ICoordinate {
  lon: number;
  lat: number;
}

export interface ILocation {
  address?: string;
  zone: string;
  ocean?: boolean;
  country: string;
  district: string;
  coordinates?: ICoordinate;
}

export interface IRanking {
  likes: number;
  notation: number;
  total: number;
  votes: number;
}

export interface IPicture {
  id?: string;
  small?: string;
  big?: string;
}

export interface IKeyValue {
  id?: string;
  name: string;
  value?: any;
  collection?: any;
}

export interface ISeller {
  id: string;
  name: string;
  ranking: IRanking;
  fulladress: string;
  zone: string;
  ocean: boolean;
  country: string;
  district: string;
}