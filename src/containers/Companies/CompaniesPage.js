import React from "react";
import { withRouter } from "react-router-dom";

import {
  Header,
  DivisionBar,
  List,
  ItemCompany,
  Search,
  Error,
  Loading
} from "../../components";
import withCompanies from "./withCompanies";

class CompaniesPage extends React.Component {
  state = {
    filteredCompanies: []
  };
  componentDidMount() {
    this.handleSetFilteredCompanies(this.props.companies);
  }
  componentDidUpdate(prevProps) {
    if (this.props.companies !== prevProps.companies) {
      this.handleSetFilteredCompanies(this.props.companies);
    }
  }
  handleSetFilteredCompanies = companiesArray => {
    this.setState({ filteredCompanies: companiesArray });
  };
  render() {
    const { filteredCompanies } = this.state;
    const {
      companies,
      onReloadCompanies,
      loadHasError,
      isLoadingCompanies
    } = this.props;
    if (isLoadingCompanies) {
      return <Loading />;
    }
    if (loadHasError) {
      return (
        <Error
          onRetry={onReloadCompanies}
          erro={{ text: "Erro ao carregar empresas." }}
        >
          Tentar Novamente
        </Error>
      );
    }
    return (
      <>
        <Header text="Empresas" largeText />
        <DivisionBar />
        <Search
          setFilteredItems={this.handleSetFilteredCompanies}
          itemsToFilter={companies}
          fieldToFilter="name"
        />
        <List ItemComponent={ItemCompany} items={filteredCompanies} />
      </>
    );
  }
}

export default withRouter(withCompanies(CompaniesPage));
