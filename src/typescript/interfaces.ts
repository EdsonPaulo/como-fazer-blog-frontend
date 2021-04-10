import { ArticleCategories, Shared } from "./enums";

export interface IArticle {
  [Shared.Title]: string;
  [Shared.Body]: string;
  [Shared.Image]: string;
  [Shared.Slug]: string;
  [Shared.Categories]: ArticleCategories[];
  [Shared.Comments]: [
    {
      [Shared.Username]: string;
      [Shared.Email]: string;
      [Shared.Body]: string;
      [Shared.CreatedAt]: Date;
    }
  ];
  [Shared.CreatedAt]: Date;
  [Shared.UpdatedAt]: Date;
}
