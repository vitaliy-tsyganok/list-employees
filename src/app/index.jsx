import { SearchEmployees } from '@features/search-employees';
import { Container, Main, Sidebar } from '@pages/layouts';
import { EmployeesList } from '@widgets/employees-list';
import './index.css';

function App() {
  return (
    <Container>
      <Main>
        <SearchEmployees />
        <EmployeesList />
      </Main>

      <Sidebar>
        {/* <!-- Кнопка --> */}
        <section className="border-b border-b-light-3 px-4 py-8">
          <button className="flex w-full items-center justify-center gap-3 rounded border border-light-blue bg-light-blue px-6 py-4 text-base font-medium text-white outline-none ring-light-blue hover:bg-light-blue/80 focus:ring-2 focus:ring-offset-2">
            <svg
              className="h-6 w-6 shrink-0 stroke-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
              />
            </svg>

            <span className="truncate">Добавить нового сотрудника</span>
          </button>
        </section>

        {/* <!-- Фильтр --> */}
        <section className="px-4 py-8">
          <form className="space-y-4 text-[15px]">
            <div className="text-2xl font-semibold">Фильтр</div>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(235px,_1fr))] gap-5">
              <fieldset className="space-y-2">
                <legend className="font-medium">Гражданство</legend>
                <select name="nationality" id="nationality">
                  <option value="" selected>
                    Все страны
                  </option>
                  <option value="RU">Россия</option>
                  <option value="USA">США</option>
                </select>
              </fieldset>
              <fieldset className="space-y-2">
                <legend className="font-medium">Пол</legend>
                <select name="sex" id="sex">
                  <option value="" selected>
                    Без разницы
                  </option>
                  <option value="man">Мужской</option>
                  <option value="woman">Женский</option>
                </select>
              </fieldset>
            </div>
            <fieldset className="space-y-2">
              <legend className="font-medium">Должность</legend>
              <select name="held-post" id="held-post">
                <option value="" selected>
                  Все должности
                </option>
                <option value="director">Руководитель</option>
              </select>
            </fieldset>
            <fieldset className="space-y-2">
              <legend className="font-medium">Тип договора</legend>
              <div className="group flex items-center gap-2">
                <input
                  type="checkbox"
                  id="contract-type-td"
                  name="contract-type-td"
                  className="group-hover:border-grey group-hover:checked:border-light-blue"
                />
                <label htmlFor="contract-type-td">ТД</label>
              </div>
              <div className="group flex items-center gap-2">
                <input
                  type="checkbox"
                  id="contract-type-gph"
                  name="contract-type-gph"
                  className="group-hover:border-grey group-hover:checked:border-light-blue"
                />
                <label htmlFor="contract-type-gph">ГПХ</label>
              </div>
              <div className="group flex items-center gap-2">
                <input
                  type="checkbox"
                  id="contract-type-smz"
                  name="contract-type-smz"
                  className="group-hover:border-grey group-hover:checked:border-light-blue"
                />
                <label htmlFor="contract-type-smz">СМЗ</label>
              </div>
              <div className="group flex items-center gap-2">
                <input
                  type="checkbox"
                  id="contract-type-candidate"
                  name="contract-type-candidate"
                  className="group-hover:border-grey group-hover:checked:border-light-blue"
                />
                <label htmlFor="contract-type-candidate">Кандидат</label>
              </div>
            </fieldset>
            <hr className="text-light-3 " />
            <div className="flex gap-5">
              <button
                className="flex w-full items-center justify-center rounded border border-green bg-green px-6 py-4 text-[15px] font-medium text-white outline-none ring-green hover:bg-green/80 focus:ring-2 focus:ring-offset-2"
                type="submit">
                Применить
              </button>
              <button
                className="flex w-full items-center justify-center rounded border border-dark-grey bg-dark-grey px-6 py-4 text-[15px] font-medium text-white outline-none ring-dark-grey hover:bg-dark-grey/80 focus:ring-2 focus:ring-offset-2"
                type="reset">
                Очистить
              </button>
            </div>
          </form>
        </section>
      </Sidebar>
    </Container>
  );
}

export default App;
