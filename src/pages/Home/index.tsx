import { NewInvoiceButton } from "../../components/Buttons/NewInvoiceButton";

export function Home() {
  return(
    <div className="flex grow justify-center">
      <section className="flex flex-col grow p-6 pt-8">
        <header className="flex items-center w-full h-11">
          <div className="w-full">
            <h4 className="w-auto font-bold text-[20px]">Invoices</h4>
            <p className="text-xs text-coolGrey">7 invoices</p>
          </div>

          <div className="mr-4">
            Filter
          </div>
          <div>
            <NewInvoiceButton />
          </div>
        </header>
        <main>

        </main>
      </section>
    </div>
  );
};