import React from "react";
import { Link } from "react-router-dom";
import {
  StyledNavbar,
  StyledNavList,
  StyledNavListItem,
} from "../abstract/styledComponents/navbar.styled";
import { NAVITEMS } from "../abstract/constants";
import Label from "../common/label";

const Navbar = () => {
  return (
    <>
      return (
      <StyledNavbar>
        <StyledNavList>
          {NAVITEMS.map((item) => {
            return (
              <StyledNavListItem key={`${item.id}_${item.name}`}>
                <Link to={item.to}>
                  <Label fontSize="20px" fontWeight="bold">
                    {item.name}
                  </Label>
                </Link>
              </StyledNavListItem>
            );
          })}
        </StyledNavList>
      </StyledNavbar>
      );
    </>
  );
};

export default Navbar;
