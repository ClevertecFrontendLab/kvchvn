import { createApi } from '@reduxjs/toolkit/query/react';

import { ALL_BOOKS_CATEGORY, API_ENDPOINTS } from '../../../constants';
import {
  AuthRequestBody,
  AuthResponse,
  Book,
  BookBase,
  BookModified,
  Category,
  ForgotPassRequestBody,
  RegistrationRequestBody,
  ResetPasswordRequestBody,
} from '../../../types';

import { baseQuery } from './baseQuery';

const libraryApi = createApi({
  reducerPath: 'libraryApi',
  baseQuery,
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
    registration: builder.mutation<AuthResponse, RegistrationRequestBody>({
      query: (body) => ({
        url: API_ENDPOINTS.registration,
        method: 'POST',
        body,
      }),
    }),
    authentication: builder.mutation<AuthResponse, AuthRequestBody>({
      query: (body) => ({
        url: API_ENDPOINTS.auth,
        method: 'POST',
        body,
      }),
    }),
    sendLinkToRecoveryPassword: builder.mutation<{ ok: boolean }, ForgotPassRequestBody>({
      query: (body) => ({
        url: API_ENDPOINTS.forgotPassword,
        method: 'POST',
        body,
      }),
    }),
    changePassword: builder.mutation<AuthResponse, ResetPasswordRequestBody>({
      query: (body) => ({
        url: API_ENDPOINTS.resetPassword,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export default libraryApi;
export const {
  useGetCategoriesQuery,
  useGetAllBooksQuery,
  useGetBookByIdQuery,
  useRegistrationMutation,
  useAuthenticationMutation,
  useSendLinkToRecoveryPasswordMutation,
  useChangePasswordMutation,
} = libraryApi;
