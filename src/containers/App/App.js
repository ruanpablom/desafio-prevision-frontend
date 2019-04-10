import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes, { menu } from "../Routes";
import PageLayout from "../PageLayout/PageLayout";
import CompaniesProvider from "../Companies/CompaniesProvider";

const App = () => (
  <Router>
    <CompaniesProvider>
      <PageLayout menu={menu}>
        <Routes />
      </PageLayout>
    </CompaniesProvider>
  </Router>
);

export default App;
