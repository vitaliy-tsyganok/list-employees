export type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string;
  taxID: string;
  contractType: ContractType;
  position: string;
  nationality: Nationality;
  passport: string;
  gender: Gender;
  city: string;
  dateOfBirth: string;
  age: string;
  status: Status;
};

export type ContractType = 'ТД' | 'ГПХ' | 'СМЗ' | 'Кандидат';
export type Nationality = 'RU' | 'USA';
export type Gender = 'мужской' | 'женский';
export type Status =
  | 'Истекают все документы'
  | 'Истекает патент'
  | 'Пропустил медосмотр'
  | 'Прошел все процедуры';

export type EmployeeQueryParams = {
  _limit: number;
  _page: number;
  status?: Status[] | undefined;
  q?: string;
};
