import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    module: 'React Mod7', // Valor fijo que no puede ser editado
    username: "",
    email: "",
    password: "mod7USIP-RODRIMOLDES"
  };
  
  const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
      setUsername: (state, action) => {
        state.username = action.payload;
      },
      
      setEmail: (state, action) => {
        state.email = action.payload;
      },
      
      setPassword: (state, action) => {
        state.password = action.payload;
      }
    }
  });
  
  
  export const { setUsername, setEmail, setPassword } = formSlice.actions;
  export default formSlice.reducer;
  