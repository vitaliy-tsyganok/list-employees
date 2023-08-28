import { AddEmployee } from '@features/employee';
import { SearchEmployees } from '@features/employee';
import { Container, Main, Sidebar } from '@pages/layouts';
import { EmployeeList } from '@widgets/employee-list';
import { EmployeesAdvancedFilter } from '@widgets/employes-advanced-filter';
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
