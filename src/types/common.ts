import { BOOKS_LIST_VIEW, BOOKS_TABLE_VIEW } from '../constants';

export type BooksView = typeof BOOKS_TABLE_VIEW | typeof BOOKS_LIST_VIEW;

export type LocalStorageKey = 'jwt';

export type Nullable<T> = T | null;
