export const PARAMS = {
  category: 'category',
  bookId: 'bookId',
};

export const ROUTES = {
  main: '/',
  books: {
    base: '/books',
    all: '/books/all',
    category: `/books/:${PARAMS.category}`,
    specificBook: `/books/:${PARAMS.category}/:${PARAMS.bookId}`,
  },
  terms: '/terms',
  contract: '/contract',
  notFound: '*',
};

export const MAX_RATING = 5;

export const SORT = {
  asc: 'asc',
  desc: 'desc',
};

export const INITIAL_SORT_BY_RATING = SORT.desc;

export const BOOKS_TABLE_VIEW = 'table';
export const BOOKS_LIST_VIEW = 'list';

export const TERMS_PAGE_TITLE = {
  terms: 'Правила использования',
  contract: 'Договор оферты',
};

export const DEFAULT_ERROR_MESSAGE = 'Что-то пошло не так. Обновите страницу через некоторое время.';
