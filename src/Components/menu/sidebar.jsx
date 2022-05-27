import React from "react";
import Wrapper from "../common/wrapper";
import Logo from "./logo";
import Menu from "./menu";

const Sidebar = () => {
  return (
    <Wrapper
      direction="column"
      width="20%"
      height="100%"
      borderRight="1px solid  #a4bedb"
      positioned
      position="fixed"
      zIndex="1"
      top="0"
      left="0"
      overflowX="hidden"
    >
      <Logo>Catland</Logo>
      <Menu></Menu>
    </Wrapper>
  );
};

export default Sidebar;
