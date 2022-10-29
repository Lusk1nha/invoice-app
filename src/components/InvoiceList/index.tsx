import { InvoiceItem } from '../InvoiceItem';
import { InvoiceListProps } from './../../shared/props/InvoiceListProps';

export function InvoiceList({ invoices }: InvoiceListProps) {
  const renderInvoicesItems = () => invoices.map(invoice => <InvoiceItem {...invoice} key={invoice.code} />)

  return (
    <ul className="flex flex-col gap-y-4">
      {
        invoices?.length > 0
          ? renderInvoicesItems()
          : null
      }
    </ul>
  );
};