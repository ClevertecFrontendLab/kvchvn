import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query/react';

import { BASE_API_URL } from '../../../constants';
import { RequestError } from '../../../types/api';

export const baseQuery = fetchBaseQuery({
  baseUrl: `${BASE_API_URL}/api/`,
}) as BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError | RequestError,
  Record<string, unknown>,
  FetchBaseQueryMeta
>;
