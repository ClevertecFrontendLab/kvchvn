import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import libraryApi from './slices/api';
import { rootReducer } from './reducer';

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(libraryApi.middleware),
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
