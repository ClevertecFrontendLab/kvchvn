import { useSelector } from 'react-redux';

import { RootState } from '../store';

export const useSortingByRatingSelector = () => useSelector((state: RootState) => state.books.sortingBy.rating);
