import { useSelector } from 'react-redux';

import { RootState } from '../store';

export const useBooksViewSelector = () => useSelector((state: RootState) => state.layout.booksView);

export const useBookCategoriesVisibilitySelector = () =>
  useSelector((state: RootState) => state.layout.isBookCategoriesVisible);

export const useMainNavVisibilitySelector = () => useSelector((state: RootState) => state.layout.isMainNavVisible);
