import React from "react";

import Travolta from "../../images/travolta.gif";
import { ButtonLink, Center } from "../../components/";

const PageNotFound = () => (
  <Center>
    <div>
      <img src={Travolta} alt="Travolta" width="200" />
    </div>
    <ButtonLink to="/">Voltar para o Home</ButtonLink>
  </Center>
);

export default PageNotFound;
