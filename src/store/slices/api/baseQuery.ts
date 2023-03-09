import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query/react';

import { BASE_API_URL } from '../../../constants';
import { getFromLocalStorage } from '../../../helpers';
import { RequestError } from '../../../types/api';

export const baseQuery = fetchBaseQuery({
  baseUrl: `${BASE_API_URL}/api/`,
  prepareHeaders: (headers) => {
    const token = getFromLocalStorage('jwt');

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
  },
}) as BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError | RequestError,
  Record<string, unknown>,
  FetchBaseQueryMeta
>;
