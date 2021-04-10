import React from "react";
import { Switch, Route } from "react-router-dom";

import { ArticlePage, ArticlesPage, HomePage } from "../pages";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/artigos" component={ArticlesPage} />
      <Route path="/artigo/:slug" component={ArticlePage} />
      <Route path="*" />
    </Switch>
  );
};

export default Routes;
