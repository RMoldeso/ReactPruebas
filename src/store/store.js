import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import productReducer from './features/product/productSlice.js'
import formReducer from './form/formSlice.js'
import { form } from 'motion/react-client';

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Importante: Agregar el reducer al store
    product: productReducer, // Importante: Agregar el reducer al store
    form: formReducer, // Importante: Agregar el reducer al store
  },
});

export default store;

