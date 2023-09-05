import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './features/categories/categoriesSlice';
import productSlice from './features/products/productSlice';

const store = configureStore({
  reducer: {
    products: productSlice,
    categories: categoriesSlice,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(api.middleware),
});

export default store;
