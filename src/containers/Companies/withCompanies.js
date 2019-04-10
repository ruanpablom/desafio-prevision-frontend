import React from "react";

import CompaniesContext from "./CompaniesContext";

const withCompanies = Component => props => (
  <CompaniesContext.Consumer>
    {context => <Component {...context} {...props} />}
  </CompaniesContext.Consumer>
);

export default withCompanies;
