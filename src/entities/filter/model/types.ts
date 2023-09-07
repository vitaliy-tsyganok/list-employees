export type FiltersSliceState = {
  status: StatusFilter;
  search: SearchFilter;
  // TODO: advanced
};

export type StatusFilter = {
  activeName: FiltersByStatusNames;
  limit: number; // количество сотрудников на одной странице / число загружаемых сотрудников за раз
  // activeCountVisible: StatusFilterEntity['countVisible'];
  ids: FiltersByStatusNames[];
  entities: Record<FiltersByStatusNames, StatusFilterEntity>;
};

export type FiltersByStatusNames =
  | 'Весь список'
  | 'Проблемные'
  | 'Критические'
  | 'Есть замечания'
  | 'Выполнено';

export type StatusFilterEntity = {
  name: FiltersByStatusNames;
  // limit: number; // число загружаемых сотрудников за раз
  page: number; // номер текущей страницы
  isHasShowMore: boolean; // есть ли еще сотрудники для загрузки
};

export type SearchFilter = {
  query: string; // строка запроса
};

// TODO: AdvancedFilter
