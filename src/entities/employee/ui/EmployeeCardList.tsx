import { Employee } from '../model/types';
import { EmployeeCard } from './EmployeeCard';

type EmployeeCardListProps = {
  employees: Employee[];
  isLoading: boolean;
  isFetching: boolean;
};

export function EmployeeCardList({ employees, isLoading }: EmployeeCardListProps) {
  const isEmployees = employees.length > 0;

  return (
    <div className="my-5 space-y-4">
      {isLoading && <h1 className="text-center text-2xl font-semibold">Загрузка...</h1>}

      {!isEmployees && !isLoading && <h2>Сотрудники не найдены</h2>}

      {isEmployees &&
        employees.map((employee) => {
          return <EmployeeCard key={employee.id} {...employee} />;
        })}
    </div>
  );
}
