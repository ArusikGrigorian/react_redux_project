import styled from "styled-components";
import { css } from "styled-components";

const StyledWrapper = styled.div`
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  background-color: ${(props) => props.bckColor || props.theme.colors.primary};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "unset"};
  margin: ${(props) => props.margin || "unset"};
  padding: ${(props) => props.padding || "unset"};
  border: ${(props) => props.border || "unset"};
  border-right: ${(props) => props.borderRight || "unset"};
  border-radius: ${(props) => props.radius || "unset"};

  ${(props) =>
    props.positioned &&
    css`
      position: ${(props) => props.position || "unset"};
      z-index: ${(props) => props.zIndex || "unset"};
      top: ${(props) => props.top || "unset"};
      left: ${(props) => props.left || "unset"};
      overflow-x: ${(props) => props.overflowX || "unset"};
    `};

  ${(props) =>
    props.shadowed &&
    css`
      box-shadow: ${(props) => props.boxShadow};
    `}
`;

export { StyledWrapper };
