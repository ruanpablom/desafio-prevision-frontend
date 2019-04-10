import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import "./button.scss";

const ButtonLink = ({ children, to, buttonType, aboutProps }) => (
  <Link
    to={{ pathname: to, aboutProps: aboutProps }}
    className={classNames("button", buttonType)}
  >
    {children}
  </Link>
);

export default ButtonLink;
