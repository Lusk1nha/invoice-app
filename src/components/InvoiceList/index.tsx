import { Fragment } from 'react';

import { InvoiceListProps } from './../../shared/props/InvoiceListProps';

import { NothingFound } from './components';
import { RenderInvoicesItems } from './components';

export function InvoiceList({ invoices }: InvoiceListProps) {
  return (
    <Fragment>
      {
        invoices?.length > 0
          ? <RenderInvoicesItems invoices={invoices} />
          : <NothingFound />
      }
    </Fragment>
  );
};