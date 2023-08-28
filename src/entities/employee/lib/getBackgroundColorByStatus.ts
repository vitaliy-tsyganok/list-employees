import { employee } from '../model/types';

const hash = {
  'Истекают все документы': 'bg-red',
  'Истекает патент': 'bg-gold',
  'Пропустил медосмотр': 'bg-light-blue',
  'Прошел все процедуры': 'bg-gold',
};

export function getBackgroundColorByStatus(status: employee['status']) {
  return hash[status];
}
