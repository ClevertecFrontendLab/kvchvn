import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ALL_BOOKS_CATEGORY, API_ENDPOINTS, BASE_API_URL } from '../../constants';
import { Book, BookBase, BookModified, Category } from '../../types';

const libraryApi = createApi({
  reducerPath: 'libraryApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_API_URL}/api/` }),
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => API_ENDPOINTS.categories,
      transformResponse: (res: Category[]) => {
        const updatedRes = [...res];

        updatedRes.unshift(ALL_BOOKS_CATEGORY);

        return updatedRes;
      },
    }),
    getAllBooks: builder.query<BookBase[], void>({
      query: () => API_ENDPOINTS.books,
    }),
    getBookById: builder.query<BookModified, string>({
      query: (bookId) => `${API_ENDPOINTS.books}/${bookId}`,
      transformResponse: (res: Book) => {
        const { publish, issueYear, cover, format, ISBN, pages, weight, categories, producer, ...bookData } = res;
        const categoriesStringified = categories ? categories.join(', ') : null;
        const bookDetails = {
          publish,
          issueYear,
          cover,
          format,
          ISBN,
          pages,
          weight,
          categories: categoriesStringified,
          producer,
        };

        return { ...bookData, details: bookDetails };
      },
    }),
  }),
});

export default libraryApi;
export const { useGetCategoriesQuery, useGetAllBooksQuery, useGetBookByIdQuery } = libraryApi;
