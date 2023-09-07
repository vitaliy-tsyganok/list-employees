import { FiltersByStatusNames, StatusFilter, StatusFilterEntity } from '../model/types';

const filtersNames: FiltersByStatusNames[] = [
  'Весь список',
  'Проблемные',
  'Критические',
  'Есть замечания',
  'Выполнено',
];
const page = 1;
const limit = 5;
const isHasShowMore = true;

export function getInitialStatusFilterEntity(
  name: FiltersByStatusNames,
): StatusFilterEntity {
  return {
    name,
    page,
    isHasShowMore,
  };
}

function getInitialStatusFiltersEntities(
  filtersNames: FiltersByStatusNames[],
): Record<FiltersByStatusNames, StatusFilterEntity> {
  const initialStatusFiltersEntities = {} as Record<
    FiltersByStatusNames,
    StatusFilterEntity
  >;

  filtersNames.forEach((name) => {
    initialStatusFiltersEntities[name] = getInitialStatusFilterEntity(name);
  });

  return initialStatusFiltersEntities;
}

export function getInitialStatusFilters(): StatusFilter {
  return {
    activeName: 'Весь список',
    ids: filtersNames,
    limit,
    entities: getInitialStatusFiltersEntities(filtersNames),
  };
}
