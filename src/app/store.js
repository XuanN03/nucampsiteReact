import { configureStore } from '@reduxjs/toolkit';
import { campsitesReducer } from '../features/campsites/campsitesSlice';

export const store = configureStore({
  reducer: {
    counter: campsitesReducer,
  },
});
