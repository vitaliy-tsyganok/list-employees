import { AddEmployee } from '@features/add-employee';
import { SearchEmployees } from '@features/search-employees';
import { Container, Main, Sidebar } from '@pages/layouts';
import { EmployeesFilter } from '@widgets/employees-filter';
import { EmployeeCardList } from '@widgets/employees-list';
import './index.css';

export function App() {
  return (
    <Container>
      <Main>
        <SearchEmployees />
        <EmployeeCardList />
      </Main>

      <Sidebar>
        <AddEmployee />
        <EmployeesFilter />
      </Sidebar>
    </Container>
  );
}
