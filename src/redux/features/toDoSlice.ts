import { createSlice } from '@reduxjs/toolkit'

// export type TToDo = {

// }

const initialState = {
  toDos: []
}; 

const todoSlice = createSlice({
  name: 'toDos',
  initialState,
  reducers: {

  }
})

export const {} = todoSlice.actions;

export default todoSlice.reducer;