const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  categories: [],
  complete: false,
};
const CategoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getCategories: (state, action) => {
      state.categories = action.payload;
    },
    getSSRCategories: (state, action) => {
      state.categories = action.payload;
    },
    setCompleteCategory: (state, action) => {
      state.complete = action.payload;
    },
  },
});
export const { getCategories, getSSRCategories, setCompleteCategory } =
  CategoriesSlice.actions;

export default CategoriesSlice.reducer;
