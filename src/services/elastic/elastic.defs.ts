export interface ICriteria {
  name: string;
  value?: string | number;
  collection?: string[] | number[] | any[]
}

export interface NewDocumentOptions {
  ranking?: boolean;
}

export interface UpdateOptions {
  _source?: Boolean;
  doc_as_upsert?: string;
}

export interface bulkParams {
  index: string;
  action: string;
}

export interface IGetParams {
  index?: string;
  id: string;
  parser?: string;
  fields?: string[]
  routing?: string;
  outputParser?: string;
  fullError?: boolean;
}

export interface IUpdateParams {
  id: string;
  record: any;
  fields?: string[];
  index?: string;
  options?: any;
  parser?: string;
}

export interface IBulkActionParams {
  records?: any;
  getItems?: boolean;
}

export interface ICheckExistAndCreateParams {
  record: any;
  criteria: [ICriteria]
}

export interface IAggByFieldParams {
  index?: string;
  fieldname: string;
  criteria: [ICriteria];
}

export interface ICreateParams{
  record: any;
  options?: any;
  routing?: string | number;
  action?: string;
  fullError?: boolean;
}

export interface CustomSearch {
  type: string;
  parentID?: string;
  level?: string;
}

export interface IGetByParentIDParams {
  index: string;
  customSearch: CustomSearch
  level: string;
  size: number;
  from: number;
  fields: string[];
  parser: string;
  parserParams: any;
}

export interface IDeleteByQueryParams {
  index?: string;
  parser?: string;
  query: any;
}

export interface IPrefixSearchParams {
  index?: string; 
  size?: number;
  field: string;
  from?: number;
  q: string;
  parser?: string
}