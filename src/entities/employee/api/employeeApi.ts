import { baseApi } from '@shared/api';
import type { Employee, EmployeeQueryParams } from '../model/types';

export const employeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    employees: builder.query<Employee[], EmployeeQueryParams>({
      query: (queryParams) => ({
        url: '/employees',
        params: queryParams,
      }),
    }),
  }),
});

export const { useEmployeesQuery } = employeeApi;
