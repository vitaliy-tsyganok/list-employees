import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import queryString from 'query-string';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3004',
    paramsSerializer: queryString.stringify,
  }),
  tagTypes: ['Employees'],
  endpoints: () => ({}),
});
