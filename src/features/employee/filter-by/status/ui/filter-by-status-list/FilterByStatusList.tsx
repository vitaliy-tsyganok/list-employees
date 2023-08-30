import { FilterByStatusButton } from '../filter-by-status-button/FilterByStatusButton';

export function FilterByStatusList() {

  return (
    <div className="-mx-4 my-5 overflow-hidden">
      <div className="flex snap-x snap-mandatory scroll-px-4 gap-2 overflow-x-auto whitespace-nowrap px-4 py-1 md:flex-wrap">
        <FilterByStatusButton name="Весь список" />
        <FilterByStatusButton name="Проблемные" />
        <FilterByStatusButton name="Критические" />
        <FilterByStatusButton name="Есть замечания" />
        <FilterByStatusButton name="Выполнено" />
      </div>
    </div>
  );
}
