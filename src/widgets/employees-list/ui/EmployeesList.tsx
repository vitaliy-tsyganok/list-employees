export function EmployeesList() {
  return (
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
  );
}
