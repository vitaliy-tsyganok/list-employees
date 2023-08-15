export function EmployeesAdvancedFilter() {
  return (
    <section className="px-4 py-8">
      <form className="space-y-4 text-[15px]">
        <div className="text-2xl font-semibold">Фильтр</div>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(235px,_1fr))] gap-5">
          <fieldset className="space-y-2">
            <legend className="font-medium">Гражданство</legend>
            <select name="countries" id="countries" defaultValue="all">
              <option value="all">
                Все страны
              </option>
              <option value="RU">Россия</option>
              <option value="USA">США</option>
            </select>
          </fieldset>
          <fieldset className="space-y-2">
            <legend className="font-medium">Пол</legend>
            <select name="sex" id="sex" defaultValue="all">
              <option value="all">
                Без разницы
              </option>
              <option value="man">Мужской</option>
              <option value="woman">Женский</option>
            </select>
          </fieldset>
        </div>
        <fieldset className="space-y-2">
          <legend className="font-medium">Должность</legend>
          <select name="held-post" id="held-post" defaultValue="all">
            <option value="all">
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
  );
}
