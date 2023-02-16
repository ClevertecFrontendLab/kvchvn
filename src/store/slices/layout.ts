import { createSlice } from '@reduxjs/toolkit';

import { BOOKS_LIST_VIEW, BOOKS_TABLE_VIEW } from '../../constants';
import { BooksView } from '../../types';

interface LayoutSliceInitialState {
  booksView: BooksView;
  isBookCategoriesVisible: boolean;
  isMainNavVisible: boolean;
}

const initialState: LayoutSliceInitialState = {
  booksView: BOOKS_TABLE_VIEW,
  isBookCategoriesVisible: true,
  isMainNavVisible: false,
};

const layout = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    toggleBooksView: (state) => {
      if (state.booksView === BOOKS_TABLE_VIEW) {
        state.booksView = BOOKS_LIST_VIEW;
      } else {
        state.booksView = BOOKS_TABLE_VIEW;
      }
    },
    toggleBookCategoriesVisibility: (state) => {
      state.isBookCategoriesVisible = !state.isBookCategoriesVisible;
    },
    hideBookCategories: (state) => {
      state.isBookCategoriesVisible = false;
    },
    toggleMainNavVisibility: (state) => {
      state.isMainNavVisible = !state.isMainNavVisible;
    },
    hideMainNav: (state) => {
      state.isMainNavVisible = false;
    },
  },
});

export default layout.reducer;
export const {
  toggleBooksView,
  toggleBookCategoriesVisibility,
  hideBookCategories,
  toggleMainNavVisibility,
  hideMainNav,
} = layout.actions;
