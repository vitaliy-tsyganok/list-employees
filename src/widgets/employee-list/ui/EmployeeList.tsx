import { EmployeeCard, Employee, useEmployeesQuery } from '@entities/employee';
import { FilterByStatusList, ShowMoreEmployeesButton } from '@features/employee';
import { useState } from 'react';

const countVisibleEmployeesInitial: number = 5;

export function EmployeeList() {
  const [countVisibleEmployees, setCountVisibleEmployees] = useState(
    countVisibleEmployeesInitial,
  );
  const limit = countVisibleEmployees + 1;
  const { data: employees = [], isLoading } = useEmployeesQuery({ _limit: limit });

  let isEmployeesUnvisible = false;

  if (employees.length) {
    isEmployeesUnvisible = employees.length > countVisibleEmployees;
  }

  let visibleEmployees: Employee[] = [];

  if (isEmployeesUnvisible) {
    visibleEmployees = employees.slice(0, -1);
  } else {
    visibleEmployees = employees.slice();
  }

  function showMoreEmployees(count: number) {
    if (isEmployeesUnvisible) {
      setCountVisibleEmployees((c) => c + count);
    }
  }
  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl font-semibold">Список сотрудников</h1>

      <FilterByStatusList />

      {isLoading ? (
        <h1 className="text-center text-2xl font-semibold">Загрузка...</h1>
      ) : (
        <div className="space-y-4">
          {visibleEmployees.map((employee) => {
            return <EmployeeCard key={employee.id} {...employee} />;
          })}

          <ShowMoreEmployeesButton
            showMoreEmployees={showMoreEmployees}
            isEmployeesUnvisible={isEmployeesUnvisible}
          />
        </div>
      )}
    </div>
  );
}
