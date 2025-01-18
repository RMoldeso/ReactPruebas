import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    module: 'React Mod7', // Valor fijo que no puede ser editado
    Username: '',
    Email: '',
    password: 'mod7USIP-RODRIMOLDES'
  };
  
  const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
      setUsername: (state, action) => {
        state.Username = action.payload;
      },
      
      setEmail: (state, action) => {
        state.Email = action.payload;
      },
      
      setPassword: (state, action) => {
        state.password = action.payload;
      }
    }
  });
  
  
  export const { setUsername, setEmail, setPassword } = formSlice.actions;
  export default formSlice.reducer;
  