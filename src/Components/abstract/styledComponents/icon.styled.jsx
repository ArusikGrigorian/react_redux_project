import styled from "styled-components";

const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${(props) => props.margin || "unset"};
`;

export { StyledIcon };
