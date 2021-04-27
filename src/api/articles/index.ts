import { APIEndpoints, Shared } from "../../typescript/enums";
import api from "../index";

import {
  TFetchArticleBySlug,
  TFetchArticles,
  TCommentArticle,
  TLikeArticle,
} from "./articles.types";

export const fetchArticles: TFetchArticles = ({ query = {} }) =>
  api.get(`/${APIEndpoints.Articles}`, {
    params: query,
  });

export const fetchArticleBySlug: TFetchArticleBySlug = ({ slug }) =>
  api.get(`/${APIEndpoints.Articles}/${Shared.Slug}/${slug}`);

export const likeArticle: TLikeArticle = ({ slug }) =>
  api.patch(`/${APIEndpoints.Articles}/${APIEndpoints.Like}/${slug}`);

export const commentArticle: TCommentArticle = ({ slug, comment }) =>
  api.patch(`/${APIEndpoints.Articles}/${APIEndpoints.Comment}/${slug}`, comment);
