import { baseApi } from '@shared/api';
import { type employee } from '../model/types';

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployees: builder.query<employee[], void>({
      query: () => '/employees',
    }),
  })
});

export const { useGetEmployeesQuery } = productApi;
