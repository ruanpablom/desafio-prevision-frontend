import React from "react";

import "./box.scss";

const InfoBoxMostAccessedEvent = ({ event }) => (
  <div className="box__container">
    <div className="box__text__container">
      <span>{`Nome: ${event.event_name}`}</span>
      <span>{`Nº acessos:${event.qtd_access}`}</span>
    </div>
  </div>
);

export default InfoBoxMostAccessedEvent;
