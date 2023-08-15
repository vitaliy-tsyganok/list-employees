import { EmployeeCard, employeesData } from '@entities/employee';
import { useState } from 'react';

export function EmployeeList() {
  const [countVisibleEmployees, setCountVisibleEmployees] = useState(5)

  const visibleEmployees = employeesData.slice(0, countVisibleEmployees)
  const isEmployeesUnvisible = countVisibleEmployees < employeesData.length

  function showMore(count: number) {
    if (isEmployeesUnvisible) {
      setCountVisibleEmployees(c => c + count)
    }
  }
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
        {visibleEmployees.map(employee => {
          return <EmployeeCard {...employee} />
        })}
        {isEmployeesUnvisible && 
        <button onClick={() => showMore(5)} className="mx-auto flex gap-3 rounded border border-blue px-6 py-4 text-[15px] text-blue outline-none ring-blue hover:bg-blue hover:text-white focus:ring-2 focus:ring-offset-2">
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
      }
      </div>
    </div>
  );
}
