import { combineReducers } from '@reduxjs/toolkit';

import libraryApi from './slices/api';
import layoutSlice from './slices/layout';

export const rootReducer = combineReducers({
  layout: layoutSlice,
  [libraryApi.reducerPath]: libraryApi.reducer,
});
