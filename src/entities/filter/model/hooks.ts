import { useAppSelector } from '@shared/libs/redux/hooks';
import { FiltersByStatusNames } from './types';

export function useStatusFilter(): FiltersByStatusNames {
  return useAppSelector((state) => state.filters.status.name);
}
