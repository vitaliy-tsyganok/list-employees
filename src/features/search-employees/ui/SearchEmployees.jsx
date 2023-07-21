export function SearchEmployees() {
  return (
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
  );
}
