import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getInitialStatusFilterEntity, getInitialStatusFilters } from '../lib/getInitialStatusFilters';
import { getQueryParams } from '../lib/getQueryParams';
import {
  FiltersByStatusNames,
  FiltersSliceState,
  SearchFilter,
  StatusFilter,
  StatusFilterEntity,
} from './types';

// const statusFilterAdapter = createEntityAdapter<StatusFilter>({
//   selectId: (statusFilter) => statusFilter.name,
// });
// TODO: advancedFilterAdapter

const initialStatusFilterState: StatusFilter = getInitialStatusFilters();
const initialSearchFilterState: SearchFilter = { query: '' };
// TODO: initialFilterAdvancedState

const initialState: FiltersSliceState = {
  status: initialStatusFilterState,
  search: initialSearchFilterState,
  // TODO: advanced
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeActiveStatusFilter: (state, action: PayloadAction<FiltersByStatusNames>) => {
      state.status.activeName = action.payload;
    },
    changePropsStatusFilter: (state, action: PayloadAction<StatusFilterEntity>) => {
      const name = action.payload.name;
      state.status.entities[name] = action.payload;
    },
    resetPropsStatusFilter: (state, action: PayloadAction<FiltersByStatusNames>) => {
      const name = action.payload;
      state.status.entities[name] = getInitialStatusFilterEntity(name)
    },
    resetStatusFilters: (state) => {
      state.status = getInitialStatusFilters();
    },

    setSearchFilter: (state, action: PayloadAction<SearchFilter>) => {
      state.search = action.payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const filtersActions = filtersSlice.actions;

// const selectFilters = (state: RootState) => state.filters
// const selectStatusFilters = (state: RootState) => state.filters.status
// const selectStatusFiltersEntities = (state: RootState) => state.filters.status.entities;
// const selectStatusActiveFilterId = (state: RootState) => state.filters.status.active;

// const selectActiveFilter = createSelector(
//   [selectStatusFiltersEntities, selectStatusActiveFilterId],
//   (entities, id) => entities[id],
// );

// Selectors
// const selectFilters = (store: RootState) => store.filters;
const selectActiveFilterName = (store: RootState) => store.filters.status.activeName;
const selectEmployeesLimit = (store: RootState) => store.filters.status.limit;
const selectFilterEntities = (store: RootState) => store.filters.status.entities;
const selectSearchQuery = (store: RootState) => store.filters.search.query;

const selectActiveFilter = createSelector(
  [selectActiveFilterName, selectFilterEntities],
  (name, entities) => entities[name],
);

// const selectEmployeesLimit = createSelector(
//   [selectActiveFilterName, selectFilterEntities],
//   (name, entities) => entities[name].limit,
// );
const selectEmployeesPage = createSelector(
  [selectActiveFilterName, selectFilterEntities],
  (name, entities) => entities[name].page,
);

const selectQueryParams = createSelector(
  [selectEmployeesLimit, selectEmployeesPage, selectActiveFilterName, selectSearchQuery],
  (employeesLimit, employeesPage, activeFilterName, searchQuery) =>
    getQueryParams({employeesLimit, employeesPage, activeFilterName, searchQuery}),
);

export const filtersSelectors = {
  status: {
    selectActiveFilter,
    selectEmployeesLimit,
    selectEmployeesPage,
    selectQueryParams,
  },
};
