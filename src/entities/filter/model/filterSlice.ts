import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getInitialStatusFilters } from '../lib/getInitialStatusFilters';
import {
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
    setStatusFilter: (state, action: PayloadAction<StatusFilterEntity>) => {
      const {name, visibleItems} = action.payload;
      state.status.active = name;
      state.status.entities[name] = { name, visibleItems };
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
const selectStatusFiltersEntities = (state: RootState) => state.filters.status.entities;
const selectStatusActiveFilterId = (state: RootState) => state.filters.status.active;

const selectActiveFilter = createSelector(
  [selectStatusFiltersEntities, selectStatusActiveFilterId],
  (entities, id) => entities[id],
);

export const filtersSelectors = {
  status: {
    selectActiveFilter,
  },
};
