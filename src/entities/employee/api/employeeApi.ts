import { baseApi } from '@shared/api';
import type { Employee } from '../model/types';

interface EmployeeQueryParams {
  q?: string;
  _limit?: number;
  _status?: Employee['status'];
}

export const employeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    employees: builder.query<Employee[], EmployeeQueryParams>({
      query: (queryParams = {}) => ({
        url: '/employees',
        params: {
          ...queryParams,
        },
      }),
    }),
  }),
});

export const { useEmployeesQuery } = employeeApi;
