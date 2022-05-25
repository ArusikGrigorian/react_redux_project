import React from "react";
import { StyledIcon } from "../abstract/styledComponents/icon.styled";

const Icon = (props) => {
  return <StyledIcon {...props}>{props.children}</StyledIcon>;
};

export default Icon;
