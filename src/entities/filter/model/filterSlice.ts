import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FiltersSliceState, SearchFilter, StatusFilter } from './types';




const initialFilterStatusState: StatusFilter = { name: 'Весь список' };
const initialFilterSearchState: SearchFilter = { query: '' };
// TODO: initialFilterAdvancedState

const initialState: FiltersSliceState = {
  status: initialFilterStatusState,
  search: initialFilterSearchState,
  // TODO: advanced
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setStatusFilter: (state, action: PayloadAction<StatusFilter>) => {
      state.status = action.payload;
    },
    setSearchFilter: (state, action: PayloadAction<SearchFilter>) => {
      state.search = action.payload;
    },
    clearStatusFilter: (state) => {
      state.status = initialFilterStatusState;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const filtersActions = filtersSlice.actions;

// export const filtersSelectors = {
//   getStatusFilter: (state: RootState) => state.filters.status.name,
// };
