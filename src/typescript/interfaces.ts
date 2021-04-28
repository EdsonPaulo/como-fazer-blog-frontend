import { ArticleCategories, Shared } from "./enums";

export interface IComment {
  [Shared.Name]: string;
  [Shared.Email]: string;
  [Shared.Body]: string;
  [Shared.CreatedAt]: Date;
}

export interface ICommonArticle {
  [Shared.Title]: string;
  [Shared.Body]: string;
  [Shared.Image]: string;
  [Shared.Category]: ArticleCategories;
  [Shared.Tags]: string[];
}

export interface IArticle extends ICommonArticle {
  [Shared.MongoId]: string;
  [Shared.Slug]: string;
  [Shared.Comments]: IComment[];
  [Shared.Views]: number;
  [Shared.CreatedAt]: Date;
  [Shared.UpdatedAt]: Date;
}

export interface IArticleWritable extends ICommonArticle {}