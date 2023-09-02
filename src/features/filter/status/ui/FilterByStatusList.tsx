import { useAppSelector } from '@shared/libs/redux';
import { FilterByStatusButton } from './FilterByStatusButton';

export function FilterByStatusList() {
  const filtersIds = useAppSelector(state => state.filters.status.ids);

  const filtersButtons = filtersIds.map((id) => (
    <FilterByStatusButton key={id} id={id} />
  ));

  return (
    <div className="-mx-4 my-5 overflow-hidden">
      <div className="flex snap-x snap-mandatory scroll-px-4 gap-2 overflow-x-auto whitespace-nowrap px-4 py-1 md:flex-wrap">
        {filtersButtons}
      </div>
    </div>
  );
}
