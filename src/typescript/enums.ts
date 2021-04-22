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
  Comunicacao = "comunicação",
  Informatica = "informática",
  Relacionamento = "relacionamento",
  Animais = "animais",
  Desporto = "desporto",
  Juventude = "juventude",
  Filosofia = "filosofia",
  Religiao = "religião",
  Culinaria = "culinária",
  Estilo = "estilo",
  Artesanato = "artesanato",
  SemCategoria = "sem categoria",
  DesenvolvimentoPessoal = "desenvolvimento pessoal",
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
  Category = "category",
  Comments = "comments",
  Name = "name",
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

export enum EnvKeys {
  API_URL = "REACT_APP_API_URL",
}
