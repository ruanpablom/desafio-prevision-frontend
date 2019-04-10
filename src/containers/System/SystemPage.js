import React from "react";

import {
  Header,
  DivisionBar,
  Loading,
  Error,
  InfoBoxMostActiveUser
} from "../../components";
import SystemService from "../../services/SystemService";
import InfoBoxMostAccessedEvent from "../../components/InfoBox/InfoBoxMostAccessedEvent";

class SystemPage extends React.Component {
  state = {
    mostAccessedEvent: null,
    mostActiveUser: null,
    isLoadingUser: false,
    isLoadingEvent: false,
    isLoadedUser: false,
    isLoadedEvent: false,
    loadUserHasError: false,
    loadEventHasError: false
  };
  componentDidMount() {
    this.handleLoadMostAccessedEvent();
    this.handleLoadMostActiveUser();
  }
  handleLoadMostActiveUser = () => {
    this.setState({ isLoadingUser: true });
    SystemService.getMostActiveUser()
      .then(result => {
        this.setState({
          mostActiveUser: result,
          isLoadingUser: false,
          loadUserHasError: false,
          isLoadedUser: true
        });
      })
      .catch(err => {
        this.setState({ isLoadingUser: false, loadUserHasError: true });
      });
  };
  handleLoadMostAccessedEvent = () => {
    this.setState({ isLoadingEvent: true, loadEventHasError: false });
    SystemService.getMostAccessedEvent()
      .then(result => {
        this.setState({
          mostAccessedEvent: result,
          isLoadingEvent: false,
          loadEventHasError: false,
          isLoadedEvent: true
        });
      })
      .catch(err => {
        this.setState({ isLoadingEvent: false, loadEventHasError: true });
      });
  };
  render() {
    const {
      mostAccessedEvent,
      mostActiveUser,
      isLoadingUser,
      isLoadingEvent,
      isLoadedUser,
      isLoadedEvent,
      loadUserHasError,
      loadEventHasError
    } = this.state;
    return (
      <>
        <Header text="Sistema" largeText />
        <DivisionBar />
        <Header text="Usuário mais ativo:" textMedium />
        {isLoadingUser && <Loading />}
        {loadUserHasError && (
          <Error
            onRetry={this.handleLoadMostActiveUser}
            erro={{ text: "Erro ao carregar." }}
          >
            Tentar Novamente
          </Error>
        )}
        {isLoadedUser && <InfoBoxMostActiveUser user={mostActiveUser} />}
        <Header text="Evento mais acessado:" textMedium />
        {isLoadingEvent && <Loading />}
        {loadEventHasError && (
          <Error
            onRetry={this.handleLoadMostAccessedEvent}
            erro={{ text: "Erro ao carregar." }}
          >
            Tentar Novamente
          </Error>
        )}
        {isLoadedEvent && (
          <InfoBoxMostAccessedEvent event={mostAccessedEvent} />
        )}
      </>
    );
  }
}

export default SystemPage;
