import React from "react";

import "./loading.scss";

const Loading = () => (
  <div className="loading__container">
    <i className="material-icons loading--rotate" style={{ fontSize: "72px" }}>
      refresh
    </i>
  </div>
);

export default Loading;
