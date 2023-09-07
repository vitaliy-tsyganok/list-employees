import { useEmployeesByQuery } from '@entities/employee';
import { filtersActions, filtersSelectors } from '@entities/filter';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { useAppDispatch, useAppSelector } from '@shared/libs/redux';
import { Spinner } from '@shared/ui';

// interface showMoreEmployeesButtonProps {
//   // isEmployeesUnvisible: boolean;
//   employeeQty: number;
//   // setCountVisibleEmployees: (value: React.SetStateAction<number>) => void;
// }

export function ShowMoreEmployeesButton() {
  // const { isEmployeesUnvisible, setCountVisibleEmployees, showMoreEmployeesCount } =
  //   props;

  const dispatch = useAppDispatch();
  const limit = useAppSelector(filtersSelectors.status.selectEmployeesLimit);
  const activeFilter = useAppSelector(filtersSelectors.status.selectActiveFilter);
  const queryParams = useAppSelector(filtersSelectors.status.selectQueryParams);
  const { isFetching, currentData } = useEmployeesByQuery(queryParams);

  // let dataEmployeesQty = 0;
  let currentDataEmployeesQty = 0;
  let isHasShowMore = true;

  if (currentData) {
    // dataEmployeesQty = data.ids.length;
    currentDataEmployeesQty = currentData.ids.length;
    isHasShowMore = currentDataEmployeesQty >= limit * activeFilter.page;
    // console.log(
    //   'dataEmployeesQty',
    //   dataEmployeesQty,
    //   'currentDataEmployeesQty',
    //   currentDataEmployeesQty,
    //   'limit',
    //   limit,
    //   'page',
    //   activeFilter.page,
    // );
  }

  // const employeeQty = useAppSelector(store => store.api.)
  // statusFilter.limit

  function showMoreEmployees() {
    dispatch(
      filtersActions.changePropsStatusFilter({
        ...activeFilter,
        // limit: activeFilter.limit + 5,
        page: activeFilter.page + 1,
        isHasShowMore,
      }),
    );
  }

  if (!isFetching && !isHasShowMore) {
    return <></>;
  }

  return (
    <div className="flex justify-center items-center h-[58px]">
      {isFetching && <Spinner />}

      {!isFetching && !isHasShowMore && <></>}

      {!isFetching && isHasShowMore && (
        <button
          onClick={showMoreEmployees}
          className="flex gap-3 rounded border border-blue px-6 py-4 text-[15px] text-blue outline-none ring-blue hover:bg-blue hover:text-white focus:ring-2 focus:ring-offset-2"
          disabled={isFetching}>
          <ArrowPathIcon className="h-6 w-6" />
          <span>Показать еще</span>
        </button>
      )}
    </div>
  );
}
