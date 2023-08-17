import { EmployeeCard, employeesData, employee } from '@entities/employee';
import { FilterByStatusList, filterByStatusName } from '@features/filter-by-status';
import { ShowMoreEmployeesButton } from '@features/show-more-employees';
import { useMemo, useRef, useState } from 'react';

const countVisibleEmployeesInitial: number = 5;
const activeFilterInitial: filterByStatusName = 'Весь список';

export function EmployeeList() {
  const employeesDataRef = useRef(employeesData);
  const employees = employeesDataRef.current;

  const [countVisibleEmployees, setCountVisibleEmployees] = useState(
    countVisibleEmployeesInitial,
  );
  const [activeFilter, setActiveFilter] = useState(activeFilterInitial);

  const filteredEmployees = useMemo(
    () => getFilteredEmployees(employees, activeFilter),
    [employees, activeFilter],
  );

  const visibleEmployees = useMemo(
    () => getVisibleEmployees(filteredEmployees, countVisibleEmployees),
    [filteredEmployees, countVisibleEmployees],
  );
  const isEmployeesUnvisible = countVisibleEmployees < filteredEmployees.length;

  function changeFilter(name: filterByStatusName) {
    setActiveFilter(name);
    setCountVisibleEmployees(countVisibleEmployeesInitial)
  }

  function showMoreEmployees(count: number) {
    if (isEmployeesUnvisible) {
      setCountVisibleEmployees((c) => c + count);
    }
  }
  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl font-semibold">Список сотрудников</h1>
      {/* <!-- Фильтры --> */}
      <FilterByStatusList activeFilter={activeFilter} changeFilter={changeFilter} />

      {/* <!-- Карточки сотрудников --> */}
      <div className="space-y-4">
        {visibleEmployees.map((employee) => {
          return <EmployeeCard key={employee.id} {...employee} />;
        })}

        <ShowMoreEmployeesButton
          showMoreEmployees={showMoreEmployees}
          isEmployeesUnvisible={isEmployeesUnvisible}
        />
      </div>
    </div>
  );
}

function getVisibleEmployees(
  filteredEmployees: employee[],
  countVisibleEmployees: number,
): employee[] {
  return filteredEmployees.slice(0, countVisibleEmployees);
}

function getFilteredEmployees(
  employees: employee[],
  activeFilter: filterByStatusName,
): employee[] {
  switch (activeFilter) {
    case 'Весь список': {
      return employees.slice();
    }
    case 'Проблемные': {
      return employees.filter(({ status }) => status === 'Истекает патент');
    }
    case 'Критические': {
      return employees.filter(({ status }) => status === 'Истекают все документы');
    }
    case 'Есть замечания': {
      return employees.filter(({ status }) => status === 'Пропустил медосмотр');
    }
    case 'Выполнено': {
      return employees.filter(({ status }) => status === 'Прошел все процедуры');
    }
    default: {
      return employees.slice();
    }
  }
}
