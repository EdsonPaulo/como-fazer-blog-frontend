import { Shared } from "../typescript/enums";

const ROUTES = {
  Home: "/",
  NotFound: "*",
  About: "/sobre",
  Contact: "/contacto",
  Services: "/servicos",
  Articles: "/atigos",
  Article: `/artigo/:${[Shared.Slug]}`,
};

export default ROUTES;
