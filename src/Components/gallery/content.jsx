import React from "react";
import Wrapper from "../common/wrapper";
import Button from "../common/button";
import Gallery from "./gallery";
import Icon from "../common/icon";
import { FaAngleDown } from "react-icons/fa";

const Content = () => {
  return (
    <Wrapper direction="column" align="center" width="80%" padding="0 0 30px 0" margin="0 0 0 20%">
      <Gallery />
      <Button
        border="1px solid"
        borderColor="#a4bedb"
        radius="5px"
        padding="10px 40px"
        margin="10px"
        insetShadowed
        insetShadow="inset 1px 1px 15px #b6cae2"
        animated
      >
        <Icon>
          <FaAngleDown />
        </Icon>
      </Button>
    </Wrapper>
  );
};

export default Content;
