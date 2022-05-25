import styled from "styled-components";
import { css } from "styled-components";

const StyledPicture = styled.img`
  border-radius: 10px;
  object-fit: cover;
  width: 90%;
  height: 250px;
  margin-bottom: 40px;

  ${(props) =>
    props.shadowed &&
    css`
      box-shadow: ${(props) => props.shadow};
    `}

  &:hover {
    transform: scale(1.1);
    transition: 1s;
  }
`;

export { StyledPicture };
