import React from "react";

import "./box.scss";

const InfoBoxMostActiveUser = ({ user }) => (
  <div className="box__container">
    <div className="box__text__container">
      <span>{`Nome: ${user.user_name}`}</span>
      <span>{`Nº ações:${user.qtd_actions}`}</span>
    </div>
    <span>{`E-mail: ${user.user_email}`}</span>
    <span>{`Empresa: ${user.company_name}`}</span>
    <span />
  </div>
);

export default InfoBoxMostActiveUser;
