import { InvoiceItemProps } from '../../shared/props/InvoiceItemProps';
import { ArrowRightSVG } from '../Icons/components/ArrowRightSVG';
import { Code, Date, Name, Price, Status } from './components';

import useModal from './../../hooks/useModal';

export function InvoiceItem({ code, date, personName, price, state }: InvoiceItemProps) {
  return (
    <li className="bg-white dark:bg-yankeesBlue-600 h-[134px] md:h-[72px] list-none grid grid-areas-layout grid-cols-layout grid-rows-layout md:flex md:items-center md:justify-start p-6 rounded-[8px] gap-y-2 shadow-sm cursor-pointer hover:scale-[1.03] transition">
      <Code code={code} />
      <Date date={date} />
      <Name name={personName} />
      <Price value={price} />
      <Status state={state} />

      <span className="w-auto hidden md:flex">
        <ArrowRightSVG className="fill-transparent stroke-brightPurple" />
      </span>
    </li>
  );
}