import { Shared } from "../../typescript/enums";
import api from "../index";

import { TFetchArticleBySlug, TFetchArticles } from "./articles.types";

export const fetchArticles: TFetchArticles = ({ query = {} }) =>
  api.get(`/${Shared.Articles}`, {
    params: query,
  });

export const fetchArticleBySlug: TFetchArticleBySlug = ({ slug }) =>
  api.get(`/${Shared.Articles}/${Shared.Slug}/${slug}`);
