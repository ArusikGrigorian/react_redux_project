import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchPictures = createAsyncThunk(
  "gallery/fetchPictures",
  async (url, { rejectWithValue }) => {
    return await axios
      .get(url)
      .then((response) => response.data)
      .catch(() => rejectWithValue("Oops, something went wrong :/"));
  }
);

const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },

  extraReducers: {
    //pending
    [fetchPictures.pending]: (state) => {
      state.loading = true;
    },
    //success
    [fetchPictures.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.list = action.payload;
    },
    //error
    [fetchPictures.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export { fetchPictures };
export default gallerySlice.reducer;
