import styled from "styled-components";
import { css, keyframes } from "styled-components";

const up_and_down = keyframes`
  0% {
    transform: translateY(-22%);
  }
  50% {
    transform: translateY(22%);
  }
  100% {
    transform: translateY(-22%);
  }
`;

const StyledButton = styled.button`
  outline: none;
  border: ${(props) => props.border || "none"};
  border-color: ${(props) => props.borderColor || "unset"};
  border-radius: ${(props) => props.radius || "0"};
  background-color: ${(props) => props.bckColor || props.theme.colors.primary};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin || "unset"};
  cursor: pointer;

  ${(props) =>
    props.insetShadowed &&
    css`
      box-shadow: ${(props) => props.insetShadow || "unset"};
    `}

  ${(props) =>
    props.animated &&
    css`
      animation: ${up_and_down} 2s ease infinite;
    `}
`;

export { StyledButton };
