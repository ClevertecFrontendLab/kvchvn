import { createSlice } from '@reduxjs/toolkit';

import { INITIAL_SORT_BY_RATING, SORT } from '../../constants';

interface BooksSliceInitialState {
  sortingBy: {
    rating: typeof SORT.asc | typeof SORT.desc;
  };
}

const initialState: BooksSliceInitialState = {
  sortingBy: {
    rating: INITIAL_SORT_BY_RATING,
  },
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    toggleSortingByRating: (state) => {
      if (state.sortingBy.rating === SORT.desc) {
        state.sortingBy.rating = SORT.asc;
      } else {
        state.sortingBy.rating = SORT.desc;
      }
    },
  },
});

export default booksSlice.reducer;
export const { toggleSortingByRating } = booksSlice.actions;
