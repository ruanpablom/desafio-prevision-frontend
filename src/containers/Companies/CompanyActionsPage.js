import React from "react";
import { withRouter } from "react-router-dom";

import withCompanies from "./withCompanies";
import {
  Header,
  DivisionBar,
  Error,
  List,
  ItemCompanyAction,
  Button,
  Loading
} from "../../components";
import CompaniesService from "../../services/CompaniesService";

class CompanyActionsPage extends React.Component {
  state = {
    companyActions: [],
    companyId: this.props.location.aboutProps,
    actionsType: 0,
    isLoadedActions: false,
    isLoadingActions: false,
    loadingActionsHasErro: false
  };
  componentDidMount() {
    if (this.state.companyId) {
      this.handleLoadActions();
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.actionsType !== prevState.actionsType) {
      this.handleLoadActions();
    }
  }
  handleChangeActionsType = () => {
    if (this.state.actionsType === 0) {
      this.setState({ actionsType: 1 });
    } else {
      this.setState({ actionsType: 0 });
    }
  };
  handleLoadActions = () => {
    this.setState({
      isLoadingActions: true,
      loadingActionsHasErro: false,
      isLoadedActions: false
    });
    if (this.state.actionsType === 0) {
      CompaniesService.getCompanyActions(this.state.companyId)
        .then(result => {
          this.setState({
            companyActions: result,
            isLoadingActions: false,
            loadingActionsHasErro: false,
            isLoadedActions: true
          });
        })
        .catch(err => {
          this.setState({
            isLoadingActions: true,
            loadingActionsHasErro: true
          });
        });
    } else {
      CompaniesService.getCompanyLast20DaysActions(this.state.companyId)
        .then(result => {
          this.setState({
            companyActions: result,
            isLoadingActions: false,
            loadingActionsHasErro: false,
            isLoadedActions: true
          });
        })
        .catch(err => {
          this.setState({
            isLoadingActions: true,
            loadingActionsHasErro: true
          });
        });
    }
  };

  render() {
    const { onCompanyName, history } = this.props;
    const {
      companyActions,
      companyId,
      isLoadingActions,
      loadingActionsHasErro,
      isLoadedActions,
      actionsType
    } = this.state;
    if (!companyId) {
      return (
        <Error
          onRetry={() => {
            history.push("/companies");
          }}
          erro={{ text: "Não foi possivel recarregar a página." }}
        >
          Empresas
        </Error>
      );
    }
    if (loadingActionsHasErro) {
      return (
        <Error
          onRetry={this.handleLoadActions}
          erro={{ text: "Erro ao carregar ações" }}
        >
          Tentar Novamente
        </Error>
      );
    }
    return (
      <>
        <Header largeText text={onCompanyName(companyId)}>
          <Button
            buttonType="button--stroke"
            onClick={() => {
              this.handleChangeActionsType();
            }}
          >
            {actionsType === 1 ? "Todas Ações" : "Ações dos ultimos 20 dias"}
          </Button>
        </Header>
        <DivisionBar />

        {!isLoadingActions && (
          <>
            <Header
              mediumText
              text={
                actionsType === 0 ? "Todas Ações" : "Ações dos ultimos 20 dias"
              }
            />
            {isLoadedActions && (
              <>
                {companyActions.length > 0 ? (
                  <List
                    ItemComponent={ItemCompanyAction}
                    items={companyActions}
                  />
                ) : (
                  <Header text="Essa empresa não possui ações!" mediumText />
                )}
              </>
            )}
          </>
        )}
        {isLoadingActions && <Loading />}
      </>
    );
  }
}

export default withRouter(withCompanies(CompanyActionsPage));
