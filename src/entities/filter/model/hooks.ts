import { useAppSelector } from '@shared/libs/redux/hooks';
import { FiltersByStatusNames, FiltersSliceState } from './types';

export function useStatusFilter(): FiltersByStatusNames {
  return useAppSelector((state) => state.filters.status.name);
}

export function useAllFilters(): FiltersSliceState {
  return useAppSelector((state) => state.filters)
}
