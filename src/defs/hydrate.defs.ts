import { IKeyValue } from "./global.defs";
import { ISearchParams } from "./search.defs";

export interface ISection {
  label: string;
  operation?: string;
  params?: ISearchParams;
  position?: number;
  card: string; 
  backgroundColor?: string;
  backgroundImg?: string;
}

export interface IMeta {
  id?: number | string;
  name: string;
  label?: string;
  sublabel?: string;
  input?: string;
  collection: string;
  categories?: string[];
  screen?: string;
  position?: number;
  children?: ISection[];
  component?: string;
}

export interface IHydrateModel {
  index?: string;
  bulkHead: any;
  __typename: string;
  categories?: string[];
  criteria: IKeyValue[];
  items: any[];
}
