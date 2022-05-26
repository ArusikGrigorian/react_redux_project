import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import gallerySlice from "./gallery.Slice";

const store = configureStore({
  reducer: {
    category: categorySlice,
    gallery: gallerySlice,
  },
});

export default store;
