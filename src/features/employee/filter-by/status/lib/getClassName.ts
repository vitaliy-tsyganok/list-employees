import { ColorVariants } from '../model/types';

export function getClassName(
  colorVariant: keyof ColorVariants,
  isActive: boolean,
) {
  const colorVariants: ColorVariants = {
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
