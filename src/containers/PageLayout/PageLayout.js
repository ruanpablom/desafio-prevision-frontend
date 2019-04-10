import React from "react";

import { AppBar, NavigationDrawer, Container } from "../../components";

class PageLayout extends React.Component {
  state = { isMenuOpen: false };
  handleOpenMenu = () => {
    this.setState({ isMenuOpen: true });
  };
  handleCloseMenu = () => {
    this.setState({ isMenuOpen: false });
  };
  render() {
    const { isMenuOpen } = this.state;
    const { menu, children } = this.props;
    return (
      <div>
        <AppBar
          onOpenMenu={this.handleOpenMenu}
          brand="Prevision Engajamento"
        />
        <Container>{children}</Container>
        <NavigationDrawer
          menu={menu}
          isMenuOpen={isMenuOpen}
          onCloseMenu={this.handleCloseMenu}
        />
      </div>
    );
  }
}

export default PageLayout;
