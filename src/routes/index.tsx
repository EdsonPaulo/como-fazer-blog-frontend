import React from "react";
import { Switch, Route } from "react-router-dom";

import {
  AboutPage,
  ArticlePage,
  ArticlesPage,
  ContactPage,
  HomePage,
  ServicesPage,
} from "../pages";
import ROUTES from "../constants/routes";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.Home} component={HomePage} />
      <Route path={ROUTES.About} component={AboutPage} />
      <Route path={ROUTES.Contact} component={ContactPage} />
      <Route path={ROUTES.Services} component={ServicesPage} />

      <Route path={ROUTES.Articles} component={ArticlesPage} />
      <Route path={ROUTES.Article} component={ArticlePage} />

      <Route path={ROUTES.NotFound} />
    </Switch>
  );
};

export default Routes;
