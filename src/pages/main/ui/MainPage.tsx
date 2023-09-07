import { AddEmployee } from '@features/employee/add';
import { EmployeeList } from '@widgets/employee-list';
import { SearchEmployees } from '@features/filter/search';
import { EmployeesAdvancedFilter } from '@widgets/employes-advanced-filter';
import { Container, Main, Sidebar } from '@widgets/layouts';
import '@shared/main.css';

export function MainPage() {
  return (
    <Container>
      <Main>
        <SearchEmployees />
        <EmployeeList />
      </Main>

      <Sidebar>
        <AddEmployee />
        <EmployeesAdvancedFilter />
      </Sidebar>
    </Container>
  );
}
