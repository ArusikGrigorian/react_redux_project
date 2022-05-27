import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, selectCategory } from "../../Store/categorySlice";
import BASE_URL from "../abstract/api";
import {
  CategoryHeaderWrapper,
  CategoryListWrapper,
  CategoryList,
  ListItem,
} from "../abstract/styledComponents/section.styled";
import Label from "../common/label";
import Icon from "../common/icon";
import { FaCat } from "react-icons/fa";

const Section = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.list);
  const loading = useSelector((state) => state.category.loading);
  const error = useSelector((state) => state.category.error);
  const selected = useSelector((state) => state.category.selectedCategory);
  const selectedCategory = categories.find((category) => category.id === selected);
  const endpoint = "categories";
  const url = `${BASE_URL}${endpoint}`;

  useEffect(() => {
    dispatch(fetchCategories(url));
  }, [dispatch, url]);

  return loading ? (
    <Label fontWeight="bold">Loading...</Label>
  ) : error ? (
    <Label fontWeight="bold">{error}</Label>
  ) : (
    <>
      <CategoryHeaderWrapper>
        <Icon>
          <FaCat />
        </Icon>
        <Label fontSize="20px" fontWeight="bold">
          {selected ? selectedCategory.name.toUpperCase() : "EGORY"}
        </Label>
      </CategoryHeaderWrapper>
      <CategoryListWrapper>
        <CategoryList>
          {categories.map((category) => {
            return (
              <ListItem
                key={category.id}
                onClick={() => dispatch(selectCategory({ id: category.id }))}
              >
                {category.name.toUpperCase()}
              </ListItem>
            );
          })}
        </CategoryList>
      </CategoryListWrapper>
    </>
  );
};

export default Section;
