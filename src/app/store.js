import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/post/postSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
