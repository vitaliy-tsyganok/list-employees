import './index.css';

function App() {
  return (
    <>
      <div className="mx-auto min-w-[320px] max-w-[1820px] lg:flex lg:gap-4 lg:p-4 xl:gap-8 xl:px-8 xl:py-8">
        <main
          className="
          flex flex-col bg-white 
          lg:shrink-[2] lg:grow lg:basis-2/3">
          {/* <!-- Поиск --> */}
          <div className="border-b border-b-light-3 px-4 pb-4 pt-8 lg:pb-2">
            <label className="relative">
              <span className="sr-only">Поиск сотрудника</span>
              <span className="absolute inset-y-0 right-0 flex cursor-text items-center pr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-dark-grey">
                  <path
                    fillRule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Поиск сотрудника"
                className="w-full rounded border-light-2 bg-light py-3 pl-4 pr-12 text-[15px] text-dark-grey hover:border-grey focus:border-light-blue focus:ring-light-blue"
              />
            </label>
            <p className="mt-3 text-[13px] text-grey ">Например: Иванов Иван</p>
          </div>

          {/* <!-- Список сотрудников --> */}
          <div className="px-4 py-8">
            <h1 className="text-2xl font-semibold">Список сотрудников</h1>
            {/* <!-- Фильтры --> */}
            <div className="-mx-4 my-5 overflow-hidden">
              <div className="flex snap-x snap-mandatory scroll-px-4 gap-2 overflow-x-auto whitespace-nowrap px-4 py-1 md:flex-wrap">
                <button className="snap-start rounded-full border border-dark-grey bg-dark-grey px-4 py-2 text-[14px] text-white outline-none focus:ring-2 focus:ring-dark-grey focus:ring-offset-2">
                  Весь список
                </button>
                <button className="snap-start rounded-full border border-gold bg-gold/10 px-4 py-2 text-[14px] text-gold outline-none hover:bg-gold hover:text-white focus:border-gold focus:ring-2 focus:ring-gold focus:ring-offset-2">
                  Проблемные
                </button>
                <button className="snap-start rounded-full border border-red bg-red/10 px-4 py-2 text-[14px] text-red outline-none hover:bg-red hover:text-white focus:border-red focus:ring-2 focus:ring-red focus:ring-offset-2">
                  Критические
                </button>
                <button className="snap-start rounded-full border border-light-blue bg-light-blue/10 px-4 py-2 text-[14px] text-light-blue outline-none hover:bg-light-blue hover:text-white focus:border-light-blue focus:ring-2 focus:ring-light-blue focus:ring-offset-2">
                  Есть замечания
                </button>
                <button className="snap-start rounded-full border border-green bg-green/10 px-4 py-2 text-[14px] text-green outline-none hover:bg-green hover:text-white focus:border-green focus:ring-2 focus:ring-green focus:ring-offset-2">
                  Выполнено
                </button>
              </div>
            </div>
            {/* <!-- Карточки сотрудников --> */}
            <div className="space-y-4">
              <article className="flex flex-col gap-4 whitespace-nowrap rounded bg-light-grey p-5 text-sm text-black">
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  <h2 className="whitespace-normal text-[18px] font-semibold leading-tight text-blue">
                    Константинопольский Константин Константинович
                  </h2>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                    <span className="rounded bg-white px-2 py-1 text-[13px] text-dark-grey">
                      ИНН 1234567890
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="rounded bg-green p-1 px-2 text-[13px] text-white">
                        СМЗ
                      </span>
                      <span className="">промышленный альпинист</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-wrap gap-x-6 gap-y-1">
                    <div className="flex items-center gap-x-2">
                      <img
                        className="w-5"
                        src="https://purecatamphetamine.github.io/country-flag-icons/3x2/RU.svg"
                        alt=""
                      />
                      <span className="font-sans">RU 4002 571654</span>
                    </div>
                    <span className="">г. Санкт-Петербург</span>
                    <span className="">Дата рождения: 23.06.2001</span>
                    <span className="">Возраст: 21 год</span>
                    <span className="">Пол: мужской</span>
                  </div>
                </div>
                <div>
                  <span className="rounded bg-red px-2 py-1 text-white">
                    Истекают все документы
                  </span>
                </div>
              </article>

              <article className="flex flex-col gap-4 whitespace-nowrap rounded bg-light-grey p-5 text-sm text-black">
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  <h2 className="whitespace-normal text-[18px] font-semibold leading-tight text-blue">
                    Иванов Иван Иванович
                  </h2>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                    <span className="rounded bg-white px-2 py-1 text-[13px] text-dark-grey">
                      ИНН 1234567890
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="rounded bg-green p-1 px-2 text-[13px] text-white">
                        СМЗ
                      </span>
                      <span className="">промышленный альпинист</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-wrap gap-x-6 gap-y-1">
                    <div className="flex items-center gap-x-2">
                      <img
                        className="w-5"
                        src="https://purecatamphetamine.github.io/country-flag-icons/3x2/RU.svg"
                        alt=""
                      />
                      <span className="font-sans">RU 4002 571654</span>
                    </div>
                    <span className="">г. Санкт-Петербург</span>
                    <span className="">Дата рождения: 23.06.2001</span>
                    <span className="">Возраст: 21 год</span>
                    <span className="">Пол: мужской</span>
                  </div>
                </div>
                <div>
                  <span className="rounded bg-gold px-2 py-1 text-white">
                    Истекает патент
                  </span>
                </div>
              </article>

              <article className="flex flex-col gap-4 whitespace-nowrap rounded bg-light-grey p-5 text-sm text-black">
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  <h2 className="whitespace-normal text-[18px] font-semibold leading-tight text-blue">
                    Константинопольский Константин Константинович
                  </h2>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                    <span className="rounded bg-white px-2 py-1 text-[13px] text-dark-grey">
                      ИНН 1234567890
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="rounded bg-green p-1 px-2 text-[13px] text-white">
                        СМЗ
                      </span>
                      <span className="">промышленный альпинист</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-wrap gap-x-6 gap-y-1">
                    <div className="flex items-center gap-x-2">
                      <img
                        className="w-5"
                        src="https://purecatamphetamine.github.io/country-flag-icons/3x2/RU.svg"
                        alt=""
                      />
                      <span className="font-sans">RU 4002 571654</span>
                    </div>
                    <span className="">г. Санкт-Петербург</span>
                    <span className="">Дата рождения: 23.06.2001</span>
                    <span className="">Возраст: 21 год</span>
                    <span className="">Пол: мужской</span>
                  </div>
                </div>
                <div>
                  <span className="rounded bg-light-blue px-2 py-1 text-white">
                    Пропустил медосмотр
                  </span>
                </div>
              </article>

              <article className="flex flex-col gap-4 whitespace-nowrap rounded bg-light-grey p-5 text-sm text-black">
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  <h2 className="whitespace-normal text-[18px] font-semibold leading-tight text-blue">
                    Константинопольский Константин Константинович
                  </h2>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                    <span className="rounded bg-white px-2 py-1 text-[13px] text-dark-grey">
                      ИНН 1234567890
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="rounded bg-green p-1 px-2 text-[13px] text-white">
                        СМЗ
                      </span>
                      <span className="">промышленный альпинист</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-wrap gap-x-6 gap-y-1">
                    <div className="flex items-center gap-x-2">
                      <img
                        className="w-5"
                        src="https://purecatamphetamine.github.io/country-flag-icons/3x2/RU.svg"
                        alt=""
                      />
                      <span className="font-sans">RU 4002 571654</span>
                    </div>
                    <span className="">г. Санкт-Петербург</span>
                    <span className="">Дата рождения: 23.06.2001</span>
                    <span className="">Возраст: 21 год</span>
                    <span className="">Пол: мужской</span>
                  </div>
                </div>
                <div>
                  <span className="rounded bg-green px-2 py-1 text-white">
                    Прошел все процедуры
                  </span>
                </div>
              </article>

              <button className="mx-auto flex gap-3 rounded border border-blue px-6 py-4 text-[15px] text-blue outline-none ring-blue hover:bg-blue hover:text-white focus:ring-2 focus:ring-offset-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
                <span>Показать еще</span>
              </button>
            </div>
          </div>
        </main>

        <aside className="mt-8 flex flex-col bg-white lg:mt-0 lg:shrink lg:grow-0 lg:basis-1/3">
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
        </aside>
      </div>
    </>
  );
}

export default App;
