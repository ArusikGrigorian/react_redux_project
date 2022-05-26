import React from "react";
import { StyledGallery } from "../abstract/styledComponents/gallery.styled";
import Picture from "./picture";

const Gallery = (props) => {
  return (
    <StyledGallery>
      <Picture
        src="https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262__340.jpg"
        shadowed
        shadow="10px 5px 10px #d3d6de"
      />
    </StyledGallery>
  );
};

export default Gallery;
