import { configureStore } from '@reduxjs/toolkit';
import photoReducer from './news/flickrSlice';

export const store = configureStore({
  reducer: {
    photo: photoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
