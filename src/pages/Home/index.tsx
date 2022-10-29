import { Tooltip } from "../../components/Tooltip";
import { InvoiceList } from './../../components/InvoiceList/index';

import { InvoiceItemProps } from "../../shared/props/InvoiceItemProps";
import { State } from "../../shared/enums/Status";


const InvoiceMockup: InvoiceItemProps[] = [
  {
    code: 'RT3080',
    date: '19 Aug 2021',
    personName: 'Jensen Huang',
    price: '£ 1,800.90',
    state: State.Paid
  },
  {
    code: 'XM9141',
    date: '20 Sep 2021',
    personName: 'Alex Grim',
    price: '£ 556.00',
    state: State.Pending
  },
  {
    code: 'RG0314',
    date: '01 Oct 2021',
    personName: 'John Morrison',
    price: '£ 14,002.33',
    state: State.Draft
  }
];

export function Home() {
  return (
    <div className="flex grow justify-center">
      <section className="max-w-[480px] md:max-w-[900px] flex flex-col grow p-6 pt-8 md:pt-14 lg:pt-[72px] md:p-12">
        <header className="flex items-center w-full h-11 md:h-[60px] mb-8 lg:mb-14">
          <Tooltip />
        </header>

        <main>
          <InvoiceList invoices={InvoiceMockup} />
        </main>
      </section>
    </div>
  );
};