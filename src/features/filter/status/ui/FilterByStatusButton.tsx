import { filtersActions, FiltersByStatusNames, filtersSelectors } from '@entities/filter';
import { useAppDispatch, useAppSelector } from '@shared/libs/redux';
import { getClassName } from '../lib/getClassName';
import { getColorVariant } from '../lib/getColorVariant';

type FilterByStatusButtonProps = {
  id: FiltersByStatusNames;
};

export function FilterByStatusButton({ id: currentName }: FilterByStatusButtonProps) {
  const dispatch = useAppDispatch();

  const activeFilter = useAppSelector(filtersSelectors.status.selectActiveFilter);

  const isActive = activeFilter.name === currentName;
  const colorVariant = getColorVariant(currentName);
  const className = getClassName(colorVariant, isActive);

  function handleClick() {
    if (!isActive) {
      dispatch(filtersActions.changeActiveStatusFilter(currentName));
    }
  }

  return (
    <button className={className} onClick={handleClick}>
      {currentName}
    </button>
  );
}
