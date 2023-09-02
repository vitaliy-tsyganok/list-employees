import { filtersActions, FiltersByStatusNames } from '@entities/filter';
import { useAppDispatch, useAppSelector } from '@shared/libs/redux';
import { getClassName } from '../lib/getClassName';
import { getColorVariant } from '../lib/getColorVariant';

type FilterByStatusButtonProps = {
  id: FiltersByStatusNames;
};

export function FilterByStatusButton({ id: name }: FilterByStatusButtonProps) {
  const dispatch = useAppDispatch();

  const activeFilterName = useAppSelector((store) => store.filters.status.active);
  const visibleItems = useAppSelector(
    (store) => store.filters.status.entities[name].visibleItems,
  );
  
  const isActive = activeFilterName === name;
  const colorVariant = getColorVariant(name);
  const className = getClassName(colorVariant, isActive);

  function onSetStatusFilter() {
    if (!isActive) {
      dispatch(filtersActions.setStatusFilter({ name, visibleItems }));
    }
  }

  return (
    <button className={className} onClick={onSetStatusFilter}>
      {name}
    </button>
  );
}
