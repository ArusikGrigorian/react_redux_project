import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchPictures = createAsyncThunk(
  "category/fetchPictures",
  async (url, { rejectWithValue }) => {
    return await axios
      .get(url)
      .then((response) => response.data)
      .catch((error) => rejectWithValue(error.message));
  }
);

const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    list: [],
    loading: false,
    error: null,
    limit: 10,
  },

  reducers: {
    addPictures(state, action) {
      state.list.push(action.payload);
    },
  },

  extraReducers: {
    [fetchPictures.pending]: (state) => {
      state.loading = true;
    },
    [fetchPictures.fulfilled]: (state, action) => {
      state.loading = false;
      state.list = action.payload;
    },
    [fetchPictures.pending]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const { addPictures } = gallerySlice.actions;
export { fetchPictures, addPictures };
export default gallerySlice.reducer;

//initial state
//render selected picture
//if there is need load more
