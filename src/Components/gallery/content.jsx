import React from "react";
import Wrapper from "../common/wrapper";
import Gallery from "./gallery";

const Content = () => {
  return (
    <Wrapper direction="column" align="center" width="80%" padding="0 0 30px 0" margin="0 0 0 20%">
      <Gallery />
    </Wrapper>
  );
};

export default Content;
