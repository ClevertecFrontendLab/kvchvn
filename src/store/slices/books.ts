import { createSlice } from '@reduxjs/toolkit';

interface BooksSliceInitialState {
  sortingBy: {
    rating: 'asc' | 'desc';
  };
}

const initialState: BooksSliceInitialState = {
  sortingBy: {
    rating: 'desc',
  },
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    toggleSortingByRating: (state) => {
      if (state.sortingBy.rating === 'desc') {
        state.sortingBy.rating = 'asc';
      } else {
        state.sortingBy.rating = 'desc';
      }
    },
  },
});

export default booksSlice.reducer;
export const { toggleSortingByRating } = booksSlice.actions;
