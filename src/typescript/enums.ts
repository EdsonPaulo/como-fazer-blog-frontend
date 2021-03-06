export enum Roles {
  Admin = "admin",
  User = "user",
}

export enum ArticleCategories {
  Tudo = "tudo",
  Saude = "saúde",
  Financas = "finanças",
  Tecnologia = "tecnologia",
  Entretenimento = "entretenimento",
  Internet = "internet",
  Educacao = "educação",
  Social = "social",
  Relacionamento = "relacionamento",
  Hobby = "hobby",
  Filosofia = "filosofia",
  Religiao = "religião",
  Culinaria = "culinária",
  Estilo = "estilo",
  SemCategoria = "sem categoria",
}

export enum Shared {
  Id = "id",
  MongoId = "_id",
  Article = "article",
  Articles = "articles",
  Slug = "slug",
  Title = "title",
  Body = "body",
  Image = "image",
  Categories = "categories",
  Tags = "tags",
  Category = "category",
  Comments = "comments",
  Comment = "comment",
  Name = "name",
  Views = "views",
  Username = "username",
  Email = "email",
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt",
}

export enum APIKeys {
  Query = "query",
  Search = "search",
  Page = "page",
  Limit = "limit",
  Total = "total",
  Next = "next",
  Prev = "prev",
  TotalPages = "totalPages",
}

export enum APIEndpoints {
  View = "view",
  Comment = "comment",
  Articles = "articles",
}

export enum EnvKeys {
  API_URL = "REACT_APP_API_URL",
}
