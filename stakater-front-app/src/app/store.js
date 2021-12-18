import { configureStore } from '@reduxjs/toolkit';
import { helloApi } from '../features/printhello/helloApi';

export const store = configureStore({
  reducer: {
    [helloApi.reducerPath] : helloApi.reducer,
  },
});
