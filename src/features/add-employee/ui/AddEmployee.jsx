export function AddEmployee() {
  return (
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
  );
}
