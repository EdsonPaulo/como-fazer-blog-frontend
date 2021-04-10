import { APIKeys } from "../typescript/enums";

export interface CommonAPIResponse {
  [APIKeys.Page]: number;
  [APIKeys.Limit]: number;
  [APIKeys.Total]: number;
  [APIKeys.Next]: number;
  [APIKeys.Prev]: number;
  [APIKeys.TotalPages]: number;
  slNo: any;
  meta: any;
}

export interface APIResponseForMultiData<T> extends CommonAPIResponse {
  data: T[];
}

export interface APIResponseForSingleData<T> extends CommonAPIResponse {
  data: T | null;
}
