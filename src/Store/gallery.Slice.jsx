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
    limit: 10,
    loading: false,
    error: null,
  },

  reducers: {
    addLimit(state) {
      state.limit += 10;
    },
  },

  extraReducers: {
    [fetchPictures.pending]: (state) => {
      state.loading = true;
    },
    [fetchPictures.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.list = action.payload;
    },
    [fetchPictures.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const { addLimit } = gallerySlice.actions;

export { fetchPictures, addLimit };
export default gallerySlice.reducer;
