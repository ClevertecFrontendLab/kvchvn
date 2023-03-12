import { combineReducers } from '@reduxjs/toolkit';

import libraryApi from './slices/api/libraryApi';
import booksSlice from './slices/books';
import layoutSlice from './slices/layout';

export const rootReducer = combineReducers({
  layout: layoutSlice,
  books: booksSlice,
  [libraryApi.reducerPath]: libraryApi.reducer,
});
