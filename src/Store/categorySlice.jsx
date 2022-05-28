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
    limit: 10,
    loading: false,
    error: null,
  },

  reducers: {
    selectCategory(state, action) {
      state.limit = 10;
      state.selectedCategory = action.payload.id;
    },

    addLimit(state) {
      state.limit += 10;
    },
  },

  extraReducers: {
    //pending
    [fetchCategories.pending]: (state) => {
      state.loading = true;
    },
    //success
    [fetchCategories.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.list = action.payload;
    },
    //error
    [fetchCategories.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const { selectCategory, addLimit } = categorySlice.actions;

export { fetchCategories, selectCategory, addLimit };
export default categorySlice.reducer;
