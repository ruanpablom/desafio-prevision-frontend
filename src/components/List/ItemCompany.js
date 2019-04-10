import React from "react";

import "./list-item.scss";
import ButtonLink from "../Button/ButtonLink";

const ItemCompany = ({ item }) => (
  <div className="list-item__container">
    <div className="list-item__text__container">
      <span>{item.name}</span>
    </div>
    <ButtonLink
      to="company-actions"
      buttonType="button--stroke"
      aboutProps={item._id}
    >
      AÇÕES
    </ButtonLink>
  </div>
);

export default ItemCompany;
