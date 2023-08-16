import { useMemo } from 'react';
import { filterByStatus, filterByStatusName } from '../../types/filterByStatus';
import { FilterByStatusButton } from '../filter-by-status-button/FilterByStatusButton';

interface FilterByStatusListProps {
  activeFilter: filterByStatusName;
  changeFilter: (name: filterByStatusName) => void;
}

export function FilterByStatusList({
  activeFilter,
  changeFilter,
}: FilterByStatusListProps) {
  const filters = useMemo(() => getFilters(activeFilter), [activeFilter]);

  return (
    <div className="-mx-4 my-5 overflow-hidden">
      <div className="flex snap-x snap-mandatory scroll-px-4 gap-2 overflow-x-auto whitespace-nowrap px-4 py-1 md:flex-wrap">
        {filters.map(({ name, isActive }) => (
          <FilterByStatusButton name={name} isActive={isActive} onClick={changeFilter} />
        ))}
      </div>
    </div>
  );
}

function getFilters(activeFilter: filterByStatusName): filterByStatus[] {
  const filters: filterByStatusName[] = [
    'Весь список',
    'Проблемные',
    'Критические',
    'Есть замечания',
    'Выполнено',
  ];
  return filters.map((filterName) => ({
    name: filterName,
    isActive: activeFilter === filterName,
  }));
}
