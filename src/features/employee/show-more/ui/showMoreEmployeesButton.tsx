import { ArrowPathIcon } from '@shared/icons';

interface showMoreEmployeesButtonProps {
  isEmployeesUnvisible: boolean;
  showMoreEmployeesCount: number;
  setCountVisibleEmployees: (value: React.SetStateAction<number>) => void;
}

export function ShowMoreEmployeesButton(props: showMoreEmployeesButtonProps) {
  const { isEmployeesUnvisible, setCountVisibleEmployees, showMoreEmployeesCount } =
    props;

  function showMoreEmployees() {
    setCountVisibleEmployees((c) => c + showMoreEmployeesCount);
  }

  if (!isEmployeesUnvisible) {
    return <></>;
  }

  return (
    <button
      onClick={showMoreEmployees}
      className="mx-auto flex gap-3 rounded border border-blue px-6 py-4 text-[15px] text-blue outline-none ring-blue hover:bg-blue hover:text-white focus:ring-2 focus:ring-offset-2">
      <ArrowPathIcon className="h-6 w-6" />
      <span>Показать еще</span>
    </button>
  );
}
