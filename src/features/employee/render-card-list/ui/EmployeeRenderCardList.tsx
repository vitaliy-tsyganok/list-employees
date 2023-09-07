import { Employee, useEmployeesByQuery } from '@entities/employee';
import { EmployeeCard } from '@entities/employee/ui/EmployeeCard';
import { filtersSelectors } from '@entities/filter';
import { useAppSelector } from '@shared/libs/redux';


export function EmployeeRenderCardList() {

  const queryParams = useAppSelector(filtersSelectors.status.selectQueryParams);
  const { data, isFetching, isSuccess } = useEmployeesByQuery(queryParams);

  // TODO employeeIds ? 
  // let employeeIds: Employee['id'][] = [];
  let employees: Employee[] = [];

  if (isSuccess) {
    // employeeIds = data.ids as Employee['id'][];
    employees = Object.values(data.entities) as Employee[];
  }

  // const isEmployees = employeeIds.length > 0;
  const isEmployees = employees.length > 0;

  return (
    <div className="my-5 space-y-4">

      {!isEmployees && !isFetching && <h2>Сотрудники не найдены</h2>}

      {isEmployees &&
        employees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}

    </div>
  );
}
