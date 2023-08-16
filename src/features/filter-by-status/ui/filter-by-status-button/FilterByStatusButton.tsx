import { filterByStatus, filterByStatusName } from '../../types/filterByStatus';

interface FilterByStatusButtonProps extends filterByStatus {
  onClick: (name: filterByStatusName) => void;
}

interface colorVariants {
  grey: string;
  yellow: string;
  red: string;
  blue: string;
  green: string;
}

export function FilterByStatusButton({
  name,
  isActive,
  onClick,
}: FilterByStatusButtonProps) {
  const colorVariant = getColorVariant(name);
  const className = getClassName(colorVariant, isActive);

  return (
    <button className={className} onClick={() => onClick(name)}>
      {name}
    </button>
  );
}

function getColorVariant(name: filterByStatusName): keyof colorVariants {
  switch (name) {
    case 'Весь список': {
      return 'grey';
    }
    case 'Проблемные': {
      return 'yellow';
    }
    case 'Критические': {
      return 'red';
    }
    case 'Есть замечания': {
      return 'blue';
    }
    case 'Выполнено': {
      return 'green';
    }
    default: {
      return 'grey';
    }
  }
}

function getClassName(
  colorVariant: keyof colorVariants,
  isActive: filterByStatus['isActive'],
) {
  const colorVariants: colorVariants = {
    grey: `${
      isActive ? 'bg-dark-grey text-white' : 'bg-dark-grey/10 text-dark-grey'
    } border-dark-grey hover:bg-dark-grey hover:text-white focus:border-dark-grey focus:ring-dark-grey`,
    yellow: `${
      isActive ? 'bg-gold text-white' : 'bg-gold/10 text-gold'
    } border-gold hover:bg-gold hover:text-white focus:border-gold focus:ring-gold`,
    red: `${
      isActive ? 'bg-red text-white' : 'bg-red/10 text-red'
    } border-red hover:bg-red hover:text-white focus:border-red focus:ring-red`,
    blue: `${
      isActive ? 'bg-light-blue text-white' : 'bg-light-blue/10 text-light-blue'
    } border-light-blue hover:bg-light-blue hover:text-white focus:border-light-blue focus:ring-light-blue`,
    green: `${
      isActive ? 'bg-green text-white' : 'bg-green/10 text-green'
    } border-green hover:bg-green hover:text-white focus:border-green focus:ring-green`,
  };
  return `snap-start rounded-full border px-4 py-2 text-[14px] outline-none focus:ring-2 focus:ring-offset-2 ${colorVariants[colorVariant]}`;
}
