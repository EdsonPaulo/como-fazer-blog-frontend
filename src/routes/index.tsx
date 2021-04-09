import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/home";
import Article from "../pages/articles/article";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/artigos/:slug" component={Article} />
        <Route path="*" /> 
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
