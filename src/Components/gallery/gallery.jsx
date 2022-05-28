import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPictures } from "../../Store/gallery.Slice";
import { addLimit } from "../../Store/categorySlice";
import BASE_URL from "../abstract/api";
import { StyledGallery } from "../abstract/styledComponents/gallery.styled";
import Picture from "./picture";
import Label from "../common/label";
import Button from "../common/button";
import Icon from "../common/icon";
import { FaAngleDown } from "react-icons/fa";

const Gallery = () => {
  const dispatch = useDispatch();
  const pictures = useSelector((state) => state.gallery.list);
  const loading = useSelector((state) => state.gallery.loading);
  const error = useSelector((state) => state.gallery.error);
  const selectedCategoryId = useSelector((state) => state.category.selectedCategory) || 1;
  const limit = useSelector((state) => state.category.limit);
  const endpoint = `images/search?limit=${limit}&category_ids=${selectedCategoryId}`;
  const url = `${BASE_URL}${endpoint}`;

  useEffect(() => {
    dispatch(fetchPictures(url));
  }, [dispatch, url]);

  return (
    <>
      {loading ? (
        <Label fontSize="30px" fontWeight="bold" margin="100px 0 0 0">
          Loading...
        </Label>
      ) : error ? (
        <Label fontSize="30px" fontWeight="bold" margin="100px 0 0 0">
          {error}
        </Label>
      ) : (
        <>
          <StyledGallery>
            {pictures.map((picture) => {
              return (
                <Picture
                  key={`${picture.id}_${Math.random()}`}
                  src={picture.url}
                  shadowed
                  shadow="10px 5px 10px #d3d6de"
                />
              );
            })}
          </StyledGallery>
          <Button
            border="1px solid"
            borderColor="#a4bedb"
            radius="5px"
            padding="10px 40px"
            margin="10px"
            insetShadowed
            insetShadow="inset 1px 1px 15px #b6cae2"
            animated
            onClick={() => dispatch(addLimit())}
          >
            <Icon>
              <FaAngleDown />
            </Icon>
          </Button>
        </>
      )}
    </>
  );
};

export default Gallery;
