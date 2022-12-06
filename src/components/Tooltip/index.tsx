import { Fragment } from "react";
import { FilterButton, NewInvoiceButton } from "../Utilities/Buttons/components";
import { TotalInvoices } from "./components";

export function Tooltip() {

  return (
    <Fragment>
      <div className="w-full h-full">
        <h4 title="Invoices" aria-label="Invoices" className="w-auto font-bold text-[20px] md:text-[32px] text-chineseBlack dark:text-white">Invoices</h4>
        <TotalInvoices total={50} />
      </div>

      <div className="flex justify-center items-center h-full mr-5">
        <FilterButton
          className="before:content-['Filter'] md:before:content-['Filter_by_status'] before:mr-4 before:font-semibold before:text-xs md:w-[150px] text-chineseBlack dark:text-white flex justify-center items-center transition"
          type="button"
          title="Filter invoices"
          aria-label="Filter invoices"
        />
      </div>

      <div className="flex justify-center items-center h-full">
        <NewInvoiceButton
          className="after:content-['New'] md:after:content-['New_Invoice'] after:text-xs after:text-white after:font-bold after:text-h after:leading-4 w-[90px] md:w-[150px] h-11 flex items-center bg-brightPurple hover:bg-violetsAreBlue p-[6px] rounded-[24px] transition"
          type="button"
          aria-label="Create new invoice"
          title="Create new invoice"
        />
      </div>
    </Fragment>
  );
}