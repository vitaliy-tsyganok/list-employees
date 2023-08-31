import { FiltersByStatusNames } from '@entities/filter';
import { ColorVariants } from '../model/types';

const hash: Record<FiltersByStatusNames, keyof ColorVariants> = {
  'Весь список': 'grey',
  'Проблемные': 'yellow',
  'Критические': 'red',
  'Есть замечания': 'blue',
  'Выполнено': 'green',
};

export function getColorVariant(name: FiltersByStatusNames): keyof ColorVariants {
  if (name === undefined) {
    return 'grey';
  }
  return hash[name];
}
