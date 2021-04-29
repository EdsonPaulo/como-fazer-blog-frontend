import { AxiosResponse } from "axios";
import { APIKeys, Shared } from "src/typescript/enums";

import {
  IArticle,
  IArticleWritable,
  IComment,
} from "../../typescript/interfaces";
import { APIResponseForMultiData } from "../api.types";

export type TFetchArticles = (payload: {
  [APIKeys.Query]?: Record<string, any>;
}) => Promise<AxiosResponse<APIResponseForMultiData<IArticle>>>;

export type TFetchArticleBySlug = (payload: {
  [Shared.Slug]: string;
}) => Promise<AxiosResponse<IArticle>>;

export type TViewArticle = (payload: {
  [Shared.Slug]: string;
}) => Promise<AxiosResponse>;

export type TPatchCommentArticle = (payload: {
  [Shared.Slug]: string;
  [Shared.Comment]: IComment;
}) => Promise<AxiosResponse>;

export type TPostCreateArticle = (payload: {
  [Shared.Article]: IArticleWritable;
}) => Promise<AxiosResponse>;

export type TPutUpdateArticle = (payload: {
  [Shared.Article]: IArticleWritable;
}) => Promise<AxiosResponse>;

export type TDeleteArticle = (payload: {
  [Shared.MongoId]: string;
}) => Promise<AxiosResponse>;
