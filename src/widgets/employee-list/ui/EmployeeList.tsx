import {
  EmployeeCard,
  Employee,
  useEmployeesQuery,
  EmployeeQueryParams,
} from '@entities/employee';
import {
  // filtersActions,
  FiltersByStatusNames,
  FiltersSliceState,
} from '@entities/filter';
import { ShowMoreEmployeesButton } from '@features/employee/show-more';
import { FilterByStatusList } from '@features/filter/status';
import { useAppSelector } from '@shared/libs/redux';
import { useState } from 'react';

const visibleEmployeesCountInitial: number = 5; // Число отображаемых сотрудников
const showMoreEmployeesCount: number = 5; // Число подгружаемых сотрудников по клике на кнопку "Показать еще"

export function EmployeeList() {
  const [visibleEmployeesCount, setCountVisibleEmployees] = useState(
    visibleEmployeesCountInitial,
  );
  // const limit = visibleEmployeesCount + 1;
  // const allFilters = useAllFilters()
  // const queryParams = getQueryParams(allFilters, visibleEmployeesCount)
  const filters = useAppSelector((store) => store.filters);
  const queryParams = getQueryParams(filters, visibleEmployeesCount);
  const {
    data: employees = [],
    isLoading,
    isFetching,
  } = useEmployeesQuery(queryParams);

  let isEmployeesUnvisible = false;

  if (employees.length) {
    isEmployeesUnvisible = employees.length > visibleEmployeesCount;
  }

  let visibleEmployees: Employee[] = [];

  if (isEmployeesUnvisible) {
    visibleEmployees = employees.slice(0, -1);
  } else {
    visibleEmployees = employees.slice();
  }

  let employeeRendered;

  switch (true) {
    case isLoading: {
      employeeRendered = (
        <h1 className="text-center text-2xl font-semibold">Загрузка...</h1>
      );
      break;
    }
    default: {
      employeeRendered = (
        <div className={`space-y-4 ${isFetching ? ' opacity-25' : ''}`}>
          {visibleEmployees.map((employee) => {
            return <EmployeeCard key={employee.id} {...employee} />;
          })}
          <ShowMoreEmployeesButton
            setCountVisibleEmployees={setCountVisibleEmployees}
            isEmployeesUnvisible={isEmployeesUnvisible}
            showMoreEmployeesCount={showMoreEmployeesCount}
          />
        </div>
      );
    }
  }

  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl font-semibold">Список сотрудников</h1>
      <FilterByStatusList />
      {employeeRendered}
    </div>
  );
}

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

function getQueryParams(
  filters: FiltersSliceState,
  visibleEmployeesCount: number,
): EmployeeQueryParams {
  const queryParams: EmployeeQueryParams = {
    _limit: visibleEmployeesCount + 1,
    status: getEmployeeStatusesByFilterName(filters.status.name),
  };

  return queryParams;
}
