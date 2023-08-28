export interface filterByStatus {
  name: filterByStatusName;
  isActive: boolean;
}

export type filterByStatusName =
  | 'Весь список'
  | 'Проблемные'
  | 'Критические'
  | 'Есть замечания'
  | 'Выполнено';
