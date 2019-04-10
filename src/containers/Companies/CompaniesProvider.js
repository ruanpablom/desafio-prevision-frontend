import React from "react";

import CompaniesContext from "./CompaniesContext";
import CompaniesService from "../../services/CompaniesService";

class CompaniesProvider extends React.Component {
  state = {
    companies: [],
    isLoadedCompanies: false,
    isLoadingCompanies: false,
    loadHasError: false
  };
  componentDidMount() {
    this.handleLoadCompanies();
  }
  handleLoadCompanies = () => {
    this.setState({
      isLoadingCompanies: true,
      loadHasError: false
    });

    CompaniesService.getCompanies()
      .then(res => {
        this.setState({
          companies: res,
          isLoadedCompanies: true,
          loadHasError: false,
          isLoadingCompanies: false
        });
      })
      .catch(err => {
        this.setState({
          loadHasError: true,
          isLoadedCompanies: false,
          isLoadingCompanies: false
        });
      });
  };
  handleCompanyName = companyId => {
    let companyIndex = this.handleFindCompanyById(companyId);

    if (companyIndex !== -1) return this.state.companies[companyIndex].name;

    return "Empresa não existe!";
  };
  handleFindCompanyById = companyId => {
    return this.state.companies.findIndex(company => company._id === companyId);
  };
  render() {
    const { children } = this.props;
    return (
      <CompaniesContext.Provider
        value={{
          ...this.state,
          onCompanyName: this.handleCompanyName
        }}
      >
        {children}
      </CompaniesContext.Provider>
    );
  }
}

export default CompaniesProvider;
