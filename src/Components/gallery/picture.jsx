import React from "react";
import Wrapper from "../common/wrapper";
import { StyledPicture } from "../abstract/styledComponents/picture.styled";

const Picture = (props) => {
  return (
    <Wrapper justify="center" width="30%">
      <StyledPicture src={props.src} {...props} />
    </Wrapper>
  );
};

export default Picture;
