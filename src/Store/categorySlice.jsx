import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async (url, { rejectWithValue }) => {
    return await axios
      .get(url)
      .then((response) => response.data)
      .catch(() => rejectWithValue("Oops, don't panic ;)"));
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    list: [],
    selectedCategory: null,
    loading: false,
    error: null,
  },

  reducers: {
    selectCategory(state, action) {
      state.selectedCategory = action.payload.id;
    },
  },

  extraReducers: {
    [fetchCategories.pending]: (state) => {
      state.loading = true;
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.list = action.payload;
    },
    [fetchCategories.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const { selectCategory } = categorySlice.actions;

export { fetchCategories, selectCategory };
export default categorySlice.reducer;
