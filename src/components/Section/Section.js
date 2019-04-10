import React from "react";
import { Link } from "react-router-dom";

import "./section.scss";

const Section = ({ items }) => (
  <div>
    <div className="section__container">
      {items.map(item => (
        <Link key={item.path} to={item.path} className="section__item">
          <i className={"material-icons section__item__icon"}>{item.icon}</i>
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
  </div>
);

export default Section;
