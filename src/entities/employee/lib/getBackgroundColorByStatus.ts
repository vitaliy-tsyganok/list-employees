import { Employee } from '../model/types';

type bgColorsVariantsForStatus = 'bg-red' | 'bg-gold' | 'bg-light-blue' | 'bg-green';

const hash: Record<Employee['status'], bgColorsVariantsForStatus> = {
  'Истекают все документы': 'bg-red',
  'Истекает патент': 'bg-gold',
  'Пропустил медосмотр': 'bg-light-blue',
  'Прошел все процедуры': 'bg-green',
};

export function getBackgroundColorByStatus(status: Employee['status']) {
  return hash[status];
}
