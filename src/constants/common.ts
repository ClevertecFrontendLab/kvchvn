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

export const BOOKS_TABLE_VIEW = 'table';
export const BOOKS_LIST_VIEW = 'list';

export const TERMS_PAGE_TITLE = {
  terms: 'Правила использования',
  contract: 'Договор оферты',
};
