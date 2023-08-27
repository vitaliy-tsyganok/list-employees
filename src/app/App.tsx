import { AddEmployee } from '@features/add-employee';
import { SearchEmployees } from '@features/search-employees';
import { Container, Main, Sidebar } from '@pages/layouts';
import { EmployeeList } from '@widgets/employee-list';
import { EmployeesAdvancedFilter } from '@widgets/employes-advanced-filter';
import './styles/index.css';

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
