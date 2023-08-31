import { EmployeeCardList, Employee, useEmployeesQuery } from '@entities/employee';
import { ShowMoreEmployeesButton } from '@features/employee/show-more';
import { FilterByStatusList } from '@features/filter/status';
import { useAppSelector } from '@shared/libs/redux';
import { useState } from 'react';
import { getQueryParams } from '../lib/getQueryParams';

const visibleEmployeesCountInitial: number = 5; // Число отображаемых сотрудников
const showMoreEmployeesCount: number = 5; // Число подгружаемых сотрудников по клике на кнопку "Показать еще"

export function EmployeeList() {
  const [visibleEmployeesCount, setCountVisibleEmployees] = useState(
    visibleEmployeesCountInitial,
  );
  const filters = useAppSelector((store) => store.filters);
  const queryParams = getQueryParams(filters, visibleEmployeesCount);
  const { data: employees = [], isLoading, isFetching } = useEmployeesQuery(queryParams);

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

  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl font-semibold">Список сотрудников</h1>
      <FilterByStatusList />
      <EmployeeCardList
        employees={visibleEmployees}
        isLoading={isLoading}
        isFetching={isFetching}
      />
      <ShowMoreEmployeesButton
        setCountVisibleEmployees={setCountVisibleEmployees}
        isEmployeesUnvisible={isEmployeesUnvisible}
        showMoreEmployeesCount={showMoreEmployeesCount}
      />
    </div>
  );
}
