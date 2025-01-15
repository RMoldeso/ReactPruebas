import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import productReducer from './features/product/productSlice.js'

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Importante: Agregar el reducer al store
    product: productReducer, // Importante: Agregar el reducer al store
  },
});

export default store;