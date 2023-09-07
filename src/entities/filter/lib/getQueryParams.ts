import { Status } from '@entities/employee';
import { EmployeeQueryParams } from '@entities/employee/@x/filter';
import { FiltersByStatusNames } from '@entities/filter';

const hashByStatusNames: Record<FiltersByStatusNames, Status[] | undefined> = {
  'Весь список': undefined,
  'Проблемные': ['Истекает патент'],
  'Критические': ['Истекают все документы'],
  'Есть замечания': ['Пропустил медосмотр'],
  'Выполнено': ['Прошел все процедуры'],
};

function getEmployeeStatusesByFilterName(
  filter: FiltersByStatusNames,
): Status[] | undefined {
  return hashByStatusNames[filter];
}

const hashByFilterNames: Record<Status, FiltersByStatusNames> = {
  'Истекает патент': 'Проблемные',
  'Истекают все документы': 'Критические',
  'Пропустил медосмотр': 'Есть замечания',
  'Прошел все процедуры': 'Выполнено',
};

export function getFilterNameByEmployeeStatus(
  employeeStatuses: Status[] | undefined,
): FiltersByStatusNames {
  let filterName: FiltersByStatusNames = 'Весь список';

  if (!employeeStatuses) {
    return filterName;
  }

  for (const status of employeeStatuses) {
    if (hashByFilterNames[status]) {
      filterName = hashByFilterNames[status];
      break;
    }
  }
  return filterName;
}

type getQueryParamsProps = {
  // filters: FiltersSliceState;
  employeesLimit: EmployeeQueryParams['_limit'];
  employeesPage: EmployeeQueryParams['_page'];
  activeFilterName: FiltersByStatusNames;
  searchQuery: string;
};

export function getQueryParams(props: getQueryParamsProps): EmployeeQueryParams {
  const { activeFilterName, employeesLimit, employeesPage, searchQuery } = props;

  const queryParams: EmployeeQueryParams = {
    _limit: employeesLimit,
    _page: employeesPage,
    // status: getEmployeeStatusesByFilterName(activeFilterName),
  };

  const status = getEmployeeStatusesByFilterName(activeFilterName);
  if (status) {
    queryParams.status = status;
  }

  const query = searchQuery.trim();
  if (query) {
    queryParams.q = query;
  }

  return queryParams;
}
