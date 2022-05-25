import styled from "styled-components";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 20%;
  background-color: #edf2f8;
  width: 80%;
  padding: 27.5px;
`;

const StyledNavList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const StyledNavListItem = styled.li`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

export { StyledNavbar, StyledNavList, StyledNavListItem };
