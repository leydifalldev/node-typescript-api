export interface FormatConfig {
  width?: number;
  height?: number;
  gravity?: string;
  crop?: string;
  dpr?: string;
  effect?: string;
  format?: string;
}

export interface IMetaPicture {
  id: string;
  mobile: string;
  desktop: string;
  format?: string;
  provider?: string;
  CREATED_AT?: string
}

export interface IPictureCommit {
  index: string;
  id: string;
  metaPicture: IMetaPicture,
  field: string
}