import { configureStore } from '@reduxjs/toolkit';
import anonimSliceReducer from '../slices/slice';
export const store = configureStore({
  reducer: {
    slice: anonimSliceReducer,
  },
});
