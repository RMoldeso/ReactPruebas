import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer, // Importante: Agregar el reducer al store
  },
});

export default store;