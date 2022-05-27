import styled from "styled-components";

const StyledLabel = styled.span`
  text-decoration: none;
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: ${(props) => props.fontWeight || "regular"};
  color: ${(props) => props.color || props.theme.colors.quaternary};
  margin: ${(props) => props.margin || "unset"};
`;

export { StyledLabel };
