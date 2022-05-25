import React, { useState } from "react";
import {
  CategoryHeaderWrapper,
  CategoryListWrapper,
  CategoryList,
  ListItem,
} from "../abstract/styledComponents/section.styled";
import Label from "../common/label";
import Icon from "../common/icon";
import { FaCat } from "react-icons/fa";

const Section = (props) => {
  const categories = [
    { name: "Bobcat", id: 1 },
    { name: "Hopcat", id: 2 },
    { name: "Dogcat", id: 3 },
    { name: "Bobcat", id: 4 },
    { name: "Hopcat", id: 5 },
    { name: "Dogcat", id: 6 },
    { name: "Bobcat", id: 7 },
  ];

  const [isSelected, setIsSelected] = useState(null);

  const handleOnSelected = (value) => () => {
    setIsSelected(value);
  };

  return (
    <>
      <CategoryHeaderWrapper>
        <Icon>
          <FaCat />
        </Icon>
        <Label fontSize="20px" fontWeight="bold">
          {isSelected || "EGORY"}
        </Label>
      </CategoryHeaderWrapper>

      <CategoryListWrapper>
        <CategoryList>
          {categories.map((category) => {
            return (
              <ListItem key={category.id} onClick={handleOnSelected(category.name)}>
                {category.name}
              </ListItem>
            );
          })}
        </CategoryList>
      </CategoryListWrapper>
    </>
  );
};

export default Section;
