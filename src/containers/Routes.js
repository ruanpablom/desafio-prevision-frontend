import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./Home/HomePage";
import PageNotFound from "./PageNotFound/PageNotFound";
import CompaniesPage from "./Companies/CompaniesPage";
import CompanyActionsPage from "./Companies/CompanyActionsPage";
import SystemPage from "./System/SystemPage";

export const menu = [
  { label: "Home", icon: "home", path: "/" },
  //{ label: "Usuários", icon: "person", path: "/usuarios" },
  { label: "Empresas", icon: "domain", path: "/companies" },
  { label: "Sistema", icon: "personal_video", path: "/system" }
];

const Routes = () => (
  <Switch>
    <Route exact path="/companies" component={CompaniesPage} />
    <Route exact path="/company-actions" component={CompanyActionsPage} />
    <Route exact path="/system" component={SystemPage} />
    <Route exact path="/" component={HomePage} />
    <Route component={PageNotFound} />
  </Switch>
);

export default Routes;
