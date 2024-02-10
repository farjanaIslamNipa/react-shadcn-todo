import counterReducer from './features/counterSlice';
import { configureStore } from '@reduxjs/toolkit'
import Logger from './middleWare/logger';

export const store = configureStore({
  reducer : {
    counter: counterReducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Logger),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch