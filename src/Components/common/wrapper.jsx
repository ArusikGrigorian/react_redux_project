import React from "react";
import { StyledWrapper } from "../abstract/styledComponents/wrapper.styled";

const Wrapper = (props) => {
  return <StyledWrapper {...props}>{props.children}</StyledWrapper>;
};

export default Wrapper;
