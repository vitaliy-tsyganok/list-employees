export type FiltersByStatusNames =
  | 'Весь список'
  | 'Проблемные'
  | 'Критические'
  | 'Есть замечания'
  | 'Выполнено';

export type StatusFilter = {
  name: FiltersByStatusNames;
};

export type SearchFilter = {
  query: string;
};

// TODO: AdvancedFilter

export type FiltersSliceState = {
  status: StatusFilter;
  search: SearchFilter;
  // TODO: advanced
};
