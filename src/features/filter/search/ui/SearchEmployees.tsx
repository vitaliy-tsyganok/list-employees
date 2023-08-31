import { filtersActions } from '@entities/filter';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useAppDispatch } from '@shared/libs/redux';
import { useState } from 'react';

export function SearchEmployees() {
  const [query, setQuery] = useState('');
  const dispatch = useAppDispatch();

  // function onEnter(event) {
    
  // }
  return (
    <div className="border-b border-b-light-3 px-4 pb-4 pt-8 lg:pb-2">
      <label className="relative">
        <span className="sr-only">Поиск сотрудника</span>
        <input
          type="text"
          placeholder="Поиск сотрудника"
          className="w-full rounded border-light-2 bg-light py-3 pl-4 pr-12 text-[15px] text-dark-grey hover:border-grey focus:border-light-blue focus:ring-light-blue"
          onChange={e => setQuery(e.target.value)}
          value={query}
          // onInput
        />
        <span className="absolute inset-y-0 right-0 flex cursor-text items-center pr-4">
          <MagnifyingGlassIcon 
            className="h-5 w-5 text-dark-grey" 
            onClick={() => dispatch(filtersActions.setSearchFilter({query}))}
          />
        </span>
      </label>
      <p className="mt-3 text-[13px] text-grey">Например: Иванов Иван</p>
    </div>
  );
}
