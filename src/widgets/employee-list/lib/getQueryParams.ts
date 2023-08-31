import { Employee, EmployeeQueryParams } from '@entities/employee';
import { FiltersByStatusNames, FiltersSliceState } from '@entities/filter';

const hash: Record<FiltersByStatusNames, Employee['status'][]> = {
  'Весь список': [],
  'Проблемные': ['Истекает патент'],
  'Критические': ['Истекают все документы'],
  'Есть замечания': ['Пропустил медосмотр'],
  'Выполнено': ['Прошел все процедуры'],
};

function getEmployeeStatusesByFilterName(
  filter: FiltersByStatusNames,
): Employee['status'][] {
  return hash[filter];
}

export function getQueryParams(
  filters: FiltersSliceState,
  visibleEmployeesCount: number,
): EmployeeQueryParams {
  const queryParams: EmployeeQueryParams = {
    _limit: visibleEmployeesCount + 1,
    status: getEmployeeStatusesByFilterName(filters.status.name),
    q: filters.search.query,
  };

  return queryParams;
}