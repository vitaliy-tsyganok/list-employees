import { filtersActions, FiltersByStatusNames, useStatusFilter } from '@entities/filter';
import { useAppDispatch } from '@shared/libs/redux';
import { getClassName } from '../lib/getClassName';
import { getColorVariant } from '../lib/getColorVariant';

type FilterByStatusButtonProps = {
  name: FiltersByStatusNames;
};

export function FilterByStatusButton({ name }: FilterByStatusButtonProps) {
  const dispatch = useAppDispatch();
  const activeFilter = useStatusFilter();

  const isActive = activeFilter === name;
  const colorVariant = getColorVariant(name);

  const className = getClassName(colorVariant, isActive);

  function onSetStatusFilter() {
    dispatch(filtersActions.setStatusFilter({ name }));
  }

  return (
    <button className={className} onClick={onSetStatusFilter}>
      {name}
    </button>
  );
}
