export type FiltersSliceState = {
  status: StatusFilter;
  search: SearchFilter;
  // TODO: advanced
};

export type StatusFilter = {
  ids: FiltersByStatusNames[];
  entities: Record<FiltersByStatusNames, StatusFilterEntity>;
  active: FiltersByStatusNames;
};

export type FiltersByStatusNames =
  | 'Весь список'
  | 'Проблемные'
  | 'Критические'
  | 'Есть замечания'
  | 'Выполнено';

export type StatusFilterEntity = {
  name: FiltersByStatusNames;
  visibleItems: number;
};

export type SearchFilter = {
  query: string;
};

// TODO: AdvancedFilter
