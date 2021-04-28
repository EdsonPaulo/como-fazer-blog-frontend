import { APIEndpoints, Shared } from "../../typescript/enums";
import api from "../index";

import {
  TFetchArticleBySlug,
  TFetchArticles,
  TCommentArticle,
  TViewArticle,
} from "./articles.types";

export const fetchArticles: TFetchArticles = ({ query = {} }) =>
  api.get(`/${APIEndpoints.Articles}`, {
    params: query,
  });

export const fetchArticleBySlug: TFetchArticleBySlug = ({ slug }) =>
  api.get(`/${APIEndpoints.Articles}/${Shared.Slug}/${slug}`);

export const viewArticle: TViewArticle = ({ slug }) =>
  api.patch(`/${APIEndpoints.Articles}/${APIEndpoints.View}/${slug}`);

export const commentArticle: TCommentArticle = ({ slug, comment }) =>
  api.patch(`/${APIEndpoints.Articles}/${APIEndpoints.Comment}/${slug}`, comment);
