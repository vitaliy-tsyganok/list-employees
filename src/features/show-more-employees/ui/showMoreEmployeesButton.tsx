import { ArrowPathIcon } from '@shared/icons';

interface showMoreEmployeesButtonProps {
  isEmployeesUnvisible: boolean;
  showMoreEmployees: (count: number) => void;
}

export function ShowMoreEmployeesButton({
  isEmployeesUnvisible,
  showMoreEmployees,
}: showMoreEmployeesButtonProps) {
  return isEmployeesUnvisible ? (
    <button
      onClick={() => showMoreEmployees(5)}
      className="mx-auto flex gap-3 rounded border border-blue px-6 py-4 text-[15px] text-blue outline-none ring-blue hover:bg-blue hover:text-white focus:ring-2 focus:ring-offset-2">
      <ArrowPathIcon className="h-6 w-6" />
      <span>Показать еще</span>
    </button>
  ) : (
    <></>
  );
}
