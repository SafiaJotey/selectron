import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  selected: [],
  allProducts: [],
};
const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    getAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    selectedProducts: (state, action) => {
      state.selected.push(action.payload);
    },

    removeSelected: (state, action) => {
      state.selected = state.selected.filter(
        (product) => product?._id != action.payload.id
      );
    },
    resetSelected: (state, action) => {
      state.selected = [];
    },
  },
});
export const { getProducts, selectedProducts, removeSelected, resetSelected,getAllProducts } =
  ProductSlice.actions;

export default ProductSlice.reducer;
