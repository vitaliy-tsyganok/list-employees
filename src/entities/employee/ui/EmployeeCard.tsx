import { getBackgroundColorByStatus } from '../lib/getBackgroundColorByStatus';
import { Employee } from '../model/types';

export function EmployeeCard(employee: Employee) {
  const {
    firstName,
    lastName,
    middleName,
    taxID,
    contractType,
    position,
    nationality,
    passport,
    gender,
    city,
    dateOfBirth,
    age,
    status,
  } = employee;

  const bgColor = getBackgroundColorByStatus(status);

  return (
    <article className="flex flex-col gap-4 whitespace-nowrap rounded bg-light-grey p-5 text-sm text-black">
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        <h2 className="whitespace-normal text-[18px] font-semibold leading-tight text-blue">
          {middleName} {firstName} {lastName}
        </h2>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <span className="rounded bg-white px-2 py-1 text-[13px] text-dark-grey">
            ИНН {taxID}
          </span>
          <div className="flex items-center gap-2">
            <span className="rounded bg-green p-1 px-2 text-[13px] text-white">
              {contractType}
            </span>
            <span className="">{position}</span>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap gap-x-6 gap-y-1">
          <div className="flex items-center gap-x-2">
            <img
              className="w-5"
              src="https://purecatamphetamine.github.io/country-flag-icons/3x2/RU.svg"
              alt=""
            />
            <span className="font-sans">
              {nationality} {passport}
            </span>
          </div>
          <span className="">г. {city}</span>
          <span className="">Дата рождения: {dateOfBirth}</span>
          <span className="">Возраст: {age}</span>
          <span className="">Пол: {gender}</span>
        </div>
      </div>
      <div>
        <span className={'rounded ' + bgColor + ' px-2 py-1 text-white'}>{status}</span>
      </div>
    </article>
  );
}

