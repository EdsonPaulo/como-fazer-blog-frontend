import { Dispatch, SetStateAction } from "react";
import { ArticleCategories } from "src/typescript/enums";
import { IArticle } from "src/typescript/interfaces";

export interface ArticlesContextProps {
  loading: boolean;
  total: number;
  articles: IArticle[];
  setArticles: Dispatch<SetStateAction<IArticle[]>>;
  selectedCategory: ArticleCategories;
  setSelectedCategory: Dispatch<SetStateAction<ArticleCategories>>;
  getArticles: (query?: Record<string, string>) => Promise<void>;
}
