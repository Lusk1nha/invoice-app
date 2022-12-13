import { InvoiceItemProps } from '../../models/InvoiceItemProps';
import { ArrowRightSVG } from '../../../Icons/components/ArrowRightSVG';
import { Code, Date, Name, Price, StatusTile } from './components';
import { redirect } from 'react-router-dom';

export function InvoiceItem({ code, date, personName, price, state }: InvoiceItemProps) {
  function redirectToDetails() {
    redirect(`/invoice/${code}`)
  }

  return (
    <li onClick={redirectToDetails} title={code} className="bg-white dark:bg-yankeesBlue-600 h-[134px] md:h-[72px] list-none grid grid-areas-invoiceItem grid-cols-invoiceItem grid-rows-invoiceItem md:flex md:items-center md:justify-start p-6 rounded-[8px] gap-y-2 shadow-sm cursor-pointer hover:scale-[1.03] transition">
      <Code code={code} />
      <Date date={date} />
      <Name name={personName} />
      <Price value={price} />
      <StatusTile state={state} />

      <span className="w-auto hidden md:flex">
        <ArrowRightSVG className="fill-transparent stroke-brightPurple" />
      </span>
    </li>
  );
}