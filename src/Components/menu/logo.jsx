import React from "react";
import Wrapper from "../common/wrapper";
import Label from "../common/label";

const Logo = ({ children }) => {
  return (
    <Wrapper justify="center" align="center" padding="20px 0" bckColor="#1d3248">
      <Label fontSize="30px" fontWeight="bold" color="#ffffff">
        {children}
      </Label>
    </Wrapper>
  );
};

export default Logo;
