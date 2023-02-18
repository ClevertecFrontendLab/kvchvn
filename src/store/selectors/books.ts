import { useSelector } from 'react-redux';

import { RootState } from '../store';

export const useSortingByRatingSelector = () => useSelector((state: RootState) => state.books.sortingBy.rating);

export const useIsSearchEmptySelector = () => useSelector((state: RootState) => state.books.search.isEmpty);

export const useSearchValueSelector = () => useSelector((state: RootState) => state.books.search.value);
