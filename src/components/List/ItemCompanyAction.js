import React from "react";

import "./list-item.scss";

let day = dateString => {
  let date = new Date(dateString);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

let time = dateString => {
  let date = new Date(dateString);
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

const ItemCompanyAction = ({ item }) => (
  <div className="list-item__container">
    <div className="list-item__text__container">
      <span className="list-item__text">Evento: {item.event_name}</span>
      <span className="list-item__text">Ação: {item.action}</span>
      <span className="list-item__text">Usuário id: {item.user_id}</span>
    </div>
    <div
      className="list-item__text__container"
      style={{ alignItems: "flex-end" }}
    >
      <span className="list-item__text">Dia: {day(item.date_time)}</span>
      <span className="list-item__text">Hora: {time(item.date_time)}</span>
    </div>
  </div>
);

export default ItemCompanyAction;
