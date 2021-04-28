import { Shared } from "../typescript/enums";

const ROUTES = {
  Home: "/",
  NotFound: "*",
  About: "/sobre",
  Contact: "/contacto",
  Services: "/servicos",
  Articles: "/atigos",
  Article: `/artigo/:${[Shared.Slug]}`,

  Admin: {
    Root: "/admin",
    Login: "/admin/login",
    Dashboard: "/admin/dashboard",
    ShowArticle: "/admin/dashboard",
    EditArticle: `/admin/editar/artigo/:${[Shared.Slug]}`,
    CreateArticle: `/admin/novo/artigo`,
  },
};

export default ROUTES;
