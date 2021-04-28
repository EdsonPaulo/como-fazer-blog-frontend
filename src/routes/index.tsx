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
import { AdminDashboard } from "src/pages/admin";

export const Routes = () => (
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

export const AdminRoutes = () => (
  <Switch>
    <Route path={ROUTES.Admin.Root} component={AdminDashboard} />
    <Route path={ROUTES.Admin.Dashboard} component={AdminDashboard} />
    <Route path={ROUTES.Admin.CreateArticle} component={AboutPage} />
    <Route path={ROUTES.Admin.EditArticle} component={AboutPage} />
    <Route path={ROUTES.Admin.ShowArticle} component={AboutPage} />

    <Route path={ROUTES.NotFound} />
  </Switch>
);
