import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FiltersByStatusNames } from './types';
// import type { Employee } from '@entities/employee/@x/filter'
// import { Filter } from './types';

// const filtersAdapter = createEntityAdapter<Filter>({
//   selectId: (Filter) => Filter.id,
// });

// type Book = { bookId: string; title: string }

// const booksAdapter = createEntityAdapter<Book>({
//   // Assume IDs are stored in a field other than `book.id`
//   selectId: (book) => book.bookId,
//   // Keep the "all IDs" array sorted based on book titles
//   sortComparer: (a, b) => a.title.localeCompare(b.title),
// })

// const booksSlice = createSlice({
//   name: 'books',
//   initialState: booksAdapter.getInitialState(),
//   reducers: {
//     // Can pass adapter functions directly as case reducers.  Because we're passing this
//     // as a value, `createSlice` will auto-generate the `bookAdded` action type / creator
//     bookAdded: booksAdapter.addOne,
//     booksReceived(state, action) {
//       // Or, call them as "mutating" helpers in a case reducer
//       booksAdapter.setAll(state, action.payload.books)
//     },
//   },
// })

//

// interface Filter {
//   type: 'status' | 'search' | 'advanced';
// }

type StatusFilter = {
  name: FiltersByStatusNames;
};

type SearchFilter = {
  query: string;
};

type FiltersSliceState = {
  status: StatusFilter;
  search: SearchFilter;
  // TODO: advanced
};

const initialFilterStatusState: StatusFilter = { name: 'Весь список' };
const initialFilterSearchState: SearchFilter = { query: '' };

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

export const filtersSelectors = {
  getStatusFilter: (state: RootState) => state.filters.status.name,
};
