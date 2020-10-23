import { IContact, ILocation, IRanking, IPicture } from "./global.defs";

export interface IPlace {
  id: string;
  name: string;
  categories: string[];
  gastronomies: string[];
  contact: IContact;
  location: ILocation;
  temporaly: boolean;
  ranking: IRanking;
  CREATED_AT?: string;
  LAST_UPDATE_DATE?: string;
  pictures?: IPicture[];
  src?: string;
}