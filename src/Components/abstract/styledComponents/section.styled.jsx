import styled from "styled-components";

const CategoryHeaderWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  padding-left: 25px;

  span::before,
  span::after {
    content: "";
    display: block;
    height: 0;
    width: 0;
  }

  span::before {
    margin-top: -6px;
  }

  span::after {
    margin-bottom: -8px;
  }

  svg {
    height: 50px;
    width: 50px;
  }
`;

const CategoryListWrapper = styled.div`
  width: 100%;
  padding: 10px;
`;

const CategoryList = styled.ul``;

const ListItem = styled.li`
  padding: 15px;
  transition: 0.5s;
  cursor: pointer;

  &:after {
    content: "";
    display: block;
    width: 0;
    border-bottom: 1px solid;
    transition: all 0.3s linear 0s;
  }

  &:hover:after {
    width: 46%;
  }
`;

export { CategoryHeaderWrapper, CategoryListWrapper, CategoryList, ListItem };
