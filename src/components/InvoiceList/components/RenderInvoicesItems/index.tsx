import { InvoiceItem } from "../InvoiceItem";
import { RenderInvoicesItemsProps } from "../../models/RenderInvoicesItemsProps";
import { Link } from "react-router-dom";

export function RenderInvoicesItems({ invoices }: RenderInvoicesItemsProps) {
  return (
    <ul className="flex flex-col gap-y-4">
      {invoices.map((invoice, id) => {
        return (
          <Link to={`/invoice/${invoice.code}`}>
            <InvoiceItem
              {...invoice}
              key={id}
            />
          </Link>
        )
      })}
    </ul>
  );
}