import { AxiosResponse } from "axios";
import { APIKeys, Shared } from "src/typescript/enums";

import { IArticle, IComment } from "../../typescript/interfaces";
import { APIResponseForMultiData } from "../api.types";

export type TFetchArticles = (payload: {
  [APIKeys.Query]?: Record<string, any>;
}) => Promise<AxiosResponse<APIResponseForMultiData<IArticle>>>;

export type TFetchArticleBySlug = (payload: {
  [Shared.Slug]: string;
}) => Promise<AxiosResponse<IArticle>>;

export type TLikeArticle = (payload: {
  [Shared.Slug]: string;
}) => Promise<AxiosResponse>;

export type TCommentArticle = (payload: {
  [Shared.Slug]: string;
  [Shared.Comment]: IComment;
}) => Promise<AxiosResponse>;
