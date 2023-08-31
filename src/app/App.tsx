import { Container, Main, Sidebar } from '@pages/layouts';
import { EmployeeList } from '@widgets/employee-list';
import { EmployeesAdvancedFilter } from '@widgets/employes-advanced-filter';
import { SearchEmployees } from '@features/filter/search';
import { AddEmployee } from '@features/employee/add';
import '@shared/ui/main.css';

export function App() {
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
