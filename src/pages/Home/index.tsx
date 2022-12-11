import { Tooltip } from "../../components/Tooltip";
import { InvoiceList } from './../../components/InvoiceList/index';

import { InvoiceItemProps } from "../../components/InvoiceList/models/InvoiceItemProps";
import { State } from "../../shared/enums/Status";
import { Fragment } from "react";

const InvoiceMockup: InvoiceItemProps[] = [
  {
    code: 'RT3080',
    date: '2021-08-19T00:00:00Z',
    personName: 'Jensen Huang',
    price: 1800.90,
    state: State.Paid
  },
  {
    code: 'XM9141',
    date: '2021-09-20T00:00:00Z',
    personName: 'Alex Grim',
    price: 556.00,
    state: State.Pending
  },
  {
    code: 'RG0314',
    date: '2021-10-01T00:00:00Z',
    personName: 'John Morrison',
    price: 14002.33,
    state: State.Draft
  }
];

export function Home() {
  return (
    <Fragment>
      <div className="w-screen h-screen flex grow justify-center relative">
        <section className="max-w-[480px] md:max-w-[900px] flex flex-col grow p-6 pt-8 md:pt-14 lg:pt-[72px] md:p-12">
          <header className="flex items-center w-full h-11 md:h-[60px] mb-8 lg:mb-14">
            <Tooltip invoices={InvoiceMockup} />
          </header>

          <main className="grow">
            <InvoiceList invoices={InvoiceMockup} />
          </main>
        </section>
      </div>
    </Fragment>
  );
};