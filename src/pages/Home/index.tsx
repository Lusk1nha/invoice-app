import { Tooltip } from "../../components/Tooltip";
import { InvoiceItem } from './../../components/InvoiceItem';


export function Home() {
  return (
    <div className="flex grow justify-center">
      <section className="flex flex-col grow p-6 pt-8 md:pt-14 md:p-12">
        <header className="flex items-center w-full h-11 md:h-[60px] mb-8">
          <Tooltip />
        </header>

        <main>
          <InvoiceItem />
        </main>
      </section>
    </div>
  );
};