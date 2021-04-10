import { AxiosResponse } from "axios";
import { APIKeys, Shared } from "src/typescript/enums";

import { IArticle } from "../../typescript/interfaces";
import {
  APIResponseForMultiData,
  APIResponseForSingleData,
} from "../api.types";

export type TFetchArticles = (payload: {
  [APIKeys.Query]?: Record<string, any>;
}) => Promise<AxiosResponse<APIResponseForMultiData<IArticle>>>;

export type TFetchArticleBySlug = (payload: {
  [Shared.Slug]: string;
}) => Promise<AxiosResponse<APIResponseForSingleData<IArticle>>>;
