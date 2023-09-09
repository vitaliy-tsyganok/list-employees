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
        const { status, q } = queryArgs;
        return {
          endpointName,
          queryArgs: { status, q },
        };
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
          currentArg?.status !== previousArg?.status ||
          currentArg?.q !== previousArg?.q
        );
      },
      onCacheEntryAdded: async ({ status }, { dispatch, cacheEntryRemoved }) => {
        await cacheEntryRemoved;
        const resetFilterName = getFilterNameByEmployeeStatus(status);
        dispatch(filtersActions.resetPropsStatusFilter(resetFilterName));
      },
      keepUnusedDataFor: 30,
    }),
  }),
});

export const { useGetEmployeesByQueryQuery: useEmployeesByQuery } = employeeApi;

// employeeApi.endpoints.getEmployeesByQuery.select()

// export const selectEmployees = employeeApi.endpoints.getEmployeesByQuery.select(theQueryArg);

// const {selectById} = employeeAdapter.getSelectors<RootState>(state => selectEmployees(state));
