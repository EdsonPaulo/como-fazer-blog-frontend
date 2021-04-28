import { ArticleCategories, Shared } from "./enums";

export interface IComment {
  [Shared.Name]: string;
  [Shared.Email]: string;
  [Shared.Body]: string;
  [Shared.CreatedAt]: Date;
}

export interface IArticle {
  [Shared.MongoId]: string;
  [Shared.Title]: string;
  [Shared.Body]: string;
  [Shared.Image]: string;
  [Shared.Slug]: string;
  [Shared.Category]: ArticleCategories;
  [Shared.Comments]: IComment[];
  [Shared.Tags]: string[];
  [Shared.Views]: number;
  [Shared.CreatedAt]: Date;
  [Shared.UpdatedAt]: Date;
}
