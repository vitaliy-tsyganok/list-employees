import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '@shared/api';

import { filtersReducer } from '@entities/filter';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
