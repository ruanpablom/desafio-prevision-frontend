import React from "react";

import { Section, Header, DivisionBar } from "../../components";
import { menu } from "../Routes";

const HomePage = () => {
  let menu_ = [...menu];
  menu_.shift();
  return (
    <>
      <Header text="Home" largeText />
      <DivisionBar />
      <Section items={menu_} />
    </>
  );
};
export default HomePage;
