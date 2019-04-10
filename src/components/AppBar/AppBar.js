import React from "react";

import "./app-bar.scss";

const AppBar = ({ onOpenMenu, brand }) => (
  <div className="app-bar">
    <div className="app-bar__container">
      <button className="app-bar__action" onClick={onOpenMenu}>
        <i className="material-icons">menu</i>
      </button>
      <span className="app-bar__brand">{brand}</span>
    </div>
  </div>
);

export default AppBar;
