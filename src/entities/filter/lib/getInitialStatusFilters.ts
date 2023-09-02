import { StatusFilter } from '../model/types';

export function getInitialStatusFilters(visibleItems: number = 5): StatusFilter {
  return {
    active: 'Весь список',
    ids: ['Весь список', 'Проблемные', 'Критические', 'Есть замечания', 'Выполнено'],
    entities: {
      'Весь список': {
        name: 'Весь список',
        visibleItems,
      },
      'Проблемные': {
        name: 'Проблемные',
        visibleItems,
      },
      'Критические': {
        name: 'Критические',
        visibleItems,
      },
      'Есть замечания': {
        name: 'Есть замечания',
        visibleItems,
      },
      'Выполнено': {
        name: 'Выполнено',
        visibleItems,
      },
    },
  };
}
