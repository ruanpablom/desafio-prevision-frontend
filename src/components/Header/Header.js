import React from "react";
import classNames from "classnames";

import "./header.scss";

const Header = ({ children, centered, text, mediumText, largeText }) => (
  <div className="header__container">
    <div className="header__left">
      <span
        className={classNames(
          "header__text",
          { "header__text--large": largeText },
          { "header__text--medium": mediumText },
          {
            "header__text--centered": centered
          }
        )}
      >
        {text}
      </span>
    </div>
    <div className="header__right">{children}</div>
  </div>
);

export default Header;
