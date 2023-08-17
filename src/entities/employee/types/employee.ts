export interface employee {
  id: string;
  firstName: string;
  lastName: string;
  middleName: string;
  taxID: string;
  contractType: contractType;
  position: string;
  nationality: nationalityType;
  passport: string;
  gender: genderType;
  city: string;
  dateOfBirth: string;
  age: string;
  status: statusType;
}

type contractType = 'ТД' | 'ГПХ' | 'СМЗ' | 'Кандидат';
type nationalityType = 'RU' | 'USA';
type genderType = 'мужской' | 'женский';
type statusType =
  | 'Истекают все документы'
  | 'Истекает патент'
  | 'Пропустил медосмотр'
  | 'Прошел все процедуры';