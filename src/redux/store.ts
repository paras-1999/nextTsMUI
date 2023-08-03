import { configureStore } from "@reduxjs/toolkit"
import countReducer from './pageSlice'
export const store = configureStore({
  reducer: {
    countReducer
  }
})

// create types for state and dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch