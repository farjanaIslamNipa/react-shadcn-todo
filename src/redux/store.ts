import counterReducer from './features/counterSlice';
import toDoReducer from './features/toDoSlice'
import { configureStore } from '@reduxjs/toolkit'


export const store = configureStore({
  reducer : {
    counter: counterReducer,
    toDos: toDoReducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch