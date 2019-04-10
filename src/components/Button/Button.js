import React from "react";
import classNames from "classnames";

import "./button.scss";

const Button = ({ children, onClick, style, buttonType, disabled }) => (
  <div>
    <button
      className={classNames("button", buttonType)}
      disabled={disabled}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  </div>
);

export default Button;
