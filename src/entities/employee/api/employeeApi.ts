import {
  filtersActions,
  getFilterNameByEmployeeStatus,
} from '@entities/filter/@x/employee';
import { createEntityAdapter, EntityState } from '@reduxjs/toolkit';
import { baseApi } from '@shared/api';
import type { Employee, EmployeeQueryParams } from '../model/types';

const employeeAdapter = createEntityAdapter<Employee>();

export const employeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeesByQuery: builder.query<EntityState<Employee>, EmployeeQueryParams>({
      query: (queryParams) => ({
        url: '/employees',
        params: queryParams,
      }),
      transformResponse: (response: Employee[]) => {
        return employeeAdapter.setAll(employeeAdapter.getInitialState(), response);
      },
      serializeQueryArgs: ({ queryArgs, endpointName }) => {
        return `${endpointName}_status=${queryArgs.status?.join(',')}`;
      },
      merge(currentCache, newEmployees) {
        return employeeAdapter.addMany(
          currentCache,
          Object.values(newEmployees.entities) as Employee[],
        );
      },
      forceRefetch: ({ currentArg, previousArg }) => {
        return (
          currentArg?._page !== previousArg?._page ||
          currentArg?.status !== previousArg?.status
        );
      },
      onCacheEntryAdded: async ({ status }, { dispatch, cacheEntryRemoved }) => {
        // console.log('Старт');
        await cacheEntryRemoved;
        const resetFilterName = getFilterNameByEmployeeStatus(status)
        dispatch(
          filtersActions.resetPropsStatusFilter(resetFilterName),
        );
        // console.log('resetFilterName', resetFilterName);
        // console.log('Конец');
      },
      keepUnusedDataFor: 10,
      // },
      // providesTags: (result) =>
      //   result
      //     ? [
      //         ...result.map(({id}) => ({ type: 'Employees' as const, id })),
      //         { type: 'Employees', id: 'LIST' },
      //       ]
      //     : [{ type: 'Employees', id: 'LIST' }],
    }),
    // getEmployeeById: builder.query<Employee, Employee['id']>({
    //   query: (id) => `/employees/${id}`,
    //   // transformResponse: (response: Employee) => {
    //   //   return employeeAdapter.addOne(employeeAdapter.getInitialState(), response);
    //   // },
    //   providesTags: (_result, _error, id) => [{ type: 'Employees', id }],
    // }),
  }),
});

export const {
  useGetEmployeesByQueryQuery: useEmployeesByQuery,
  // useGetEmployeeByIdQuery: useEmployeeById,
} = employeeApi;

// employeeApi.endpoints.getEmployeesByQuery.select()

// export const selectEmployees = employeeApi.endpoints.getEmployeesByQuery.select(theQueryArg);

// const {selectById} = employeeAdapter.getSelectors<RootState>(state => selectEmployees(state));
