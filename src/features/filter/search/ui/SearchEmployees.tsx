import { filtersActions } from '@entities/filter';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useAppDispatch, useAppSelector } from '@shared/libs/redux';
import React, { useEffect, useState } from 'react';

export function SearchEmployees() {
  const dispatch = useAppDispatch();

  const [query, setQuery] = useState('');
  const activeFilterName = useAppSelector((store) => store.filters.status.activeName);

  // console.log(query);
  useEffect(() => {
    if (query === '') {
      dispatch(filtersActions.setSearchFilter({ query }));
    }
  }, [query, dispatch]);

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (activeFilterName !== 'Весь список') {
      // console.log('activeFilterName1', activeFilterName);
      dispatch(filtersActions.resetStatusFilters())
    }
    // console.log('activeFilterName2', activeFilterName);
    dispatch(filtersActions.setSearchFilter({ query }));
  }

  return (
    <div className="border-b border-b-light-3 px-4 pb-4 pt-8 lg:pb-2">
      <form onSubmit={onSubmit} onReset={() => setQuery(() => '')}>
        <label className="relative flex">
          <span className="sr-only">Поиск сотрудника</span>
          <input
            type="search"
            placeholder="Поиск сотрудника"
            className="pl-4sd w-full rounded border-light-2 bg-light py-3 pr-12 text-[15px] text-dark-grey hover:border-grey focus:border-light-blue focus:ring-light-blue [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />

          {query === '' && (
            <div className="pointer-events-none absolute right-0 flex h-full items-center px-4">
              <MagnifyingGlassIcon className="h-5 w-5 text-dark-grey" />
            </div>
          )}

          {query !== '' && (
            <button
              type="reset"
              className="absolute right-0 flex h-full cursor-pointer items-center px-4">
              <XMarkIcon className="h-5 w-5 text-dark-grey" />
            </button>
          )}
        </label>
      </form>
      <p className="mt-3 text-[13px] text-grey">Например: Иванов Иван</p>
    </div>
  );
}
