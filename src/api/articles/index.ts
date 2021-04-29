import { APIEndpoints, Shared } from "../../typescript/enums";
import api from "../index";

import {
  TFetchArticleBySlug,
  TFetchArticles,
  TPatchCommentArticle,
  TViewArticle,
  TPostCreateArticle,
  TDeleteArticle,
  TPutUpdateArticle,
} from "./articles.types";

export const fetchArticles: TFetchArticles = ({ query = {} }) =>
  api.get(`/${APIEndpoints.Articles}`, {
    params: query,
  });

export const fetchArticleBySlug: TFetchArticleBySlug = ({ slug }) =>
  api.get(`/${APIEndpoints.Articles}/${Shared.Slug}/${slug}`);

export const viewArticle: TViewArticle = ({ slug }) =>
  api.patch(`/${APIEndpoints.Articles}/${APIEndpoints.View}/${slug}`);

export const patchCommentArticle: TPatchCommentArticle = ({ slug, comment }) =>
  api.patch(
    `/${APIEndpoints.Articles}/${APIEndpoints.Comment}/${slug}`,
    comment
  );

export const postCreateArticle: TPostCreateArticle = ({ article }) =>
  api.post(`/${APIEndpoints.Articles}`, article);

export const putUpdateArticle: TPutUpdateArticle = ({ article }) =>
  api.put(`/${APIEndpoints.Articles}`, article);

export const deleteArticle: TDeleteArticle = ({ _id }) =>
  api.delete(`/${APIEndpoints.Articles}/${_id}`);
