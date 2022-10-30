import { InvoiceItem } from "../../../InvoiceItem";
import { RenderInvoicesItemsProps } from "../../models/RenderInvoicesItemsProps";

export function RenderInvoicesItems({ invoices }: RenderInvoicesItemsProps) {

  const renderInvoicesItems = () => invoices.map(invoice => <InvoiceItem {...invoice} key={invoice.code} />)

  return (
    <ul className="flex flex-col gap-y-4">
      {renderInvoicesItems()}
    </ul>
  );
}