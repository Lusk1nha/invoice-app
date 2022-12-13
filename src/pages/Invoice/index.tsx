import { Fragment, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Code, StatusTile } from "../../components/InvoiceList/components/InvoiceItem/components";
import { GoBackButton } from "../../components/Utilities/Buttons/components/GoBackButton";
import { State } from "../../shared/enums/Status";

import { InvoiceModel } from "../../shared/models/InvoiceModel";

export function Invoice() {
  const [data, setData] = useState<InvoiceModel>();

  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(code)
  })

  function goBackPage() {
    navigate(-1)
  }

  return (
    <Fragment>
      <div className="flex justify-center grow relative">
        <section className="max-w-[730px] w-full py-8 px-6 flex flex-col grow">
          <div className="mb-8">
            <GoBackButton title="Go back to home page" className="w-auto flex items-center justify-start mb-6" onClick={goBackPage} />
          </div>

          <header className="bg-white dark:bg-yankeesBlue-600 h-[91px] flex justify-center flex-col p-6 mb-4 rounded-lg shadow-sm">
            <article className="flex">
              <div className="flex items-center justify-center">
                <span className="invoiceFieldPrimaryHeader">
                  Status
                </span>
              </div>

              <StatusTile state={State.Pending} />
            </article>
          </header>

          <main className="bg-white dark:bg-yankeesBlue-600 flex flex-col grow p-6 md:p-12 rounded-lg shadow-sm">
            <article className="flex flex-col md:flex-row md:justify-between gap-y-8 mb-[30px]">
              <div>
                <Code code={code ?? 'Not found'} />
                <span className="invoiceFieldPrimaryHeader">
                  Graphic Design
                </span>
              </div>

              <p className="invoiceFieldPrimaryHeader text-[11px] tracking-[-0.23px] leading-[18px] md:text-end">
                19 Union Terrace <br />
                London <br />
                E1 3EZ <br />
                United Kingdom <br />
              </p>
            </article>

            <article className="grid grid-areas-invoiceDetailsMobile grid-cols-invoiceDetailsMobile grid-rows-invoiceDetailsMobile md:grid-areas-invoiceDetailsTablet md:grid-cols-invoiceDetailsTablet md:grid-rows-invoiceDetailsTablet gap-y-8 mb-10">
              <div className="invoiceFieldContainer grid-in-invoiceDate">
                <span className="invoiceFieldPrimaryHeader">
                  Invoice Date
                </span>
                <h3 className="invoiceFieldPrimaryText">
                  21 Aug 2021
                </h3>
              </div>

              <div className="invoiceFieldContainer grid-in-paymentDue">
                <span className="invoiceFieldPrimaryHeader">
                  Payment Due
                </span>
                <h3 className="invoiceFieldPrimaryText">
                  20 Sep 2021
                </h3>
              </div>

              <div className="invoiceFieldContainer grid-in-sentTo">
                <span className="invoiceFieldPrimaryHeader">
                  Sent To
                </span>
                <h3 className="invoiceFieldPrimaryText">
                  alexgrim@mail.com
                </h3>
              </div>

              <div className="invoiceFieldContainer grid-in-billTo">
                <span className="invoiceFieldPrimaryHeader">
                  Bill To
                </span>
                <h3 className="invoiceFieldPrimaryText">
                  Alex Grim
                </h3>
                <p className="invoiceFieldPrimaryHeader text-[11px] tracking-[-0.23px] leading-[18px]">
                  84 Church Way <br />
                  Bradford <br />
                  BD1 9PB <br />
                  United Kingdom <br />
                </p>
              </div>
            </article>

            <article className="flex flex-col overflow-hidden rounded-lg shadow-sm">
              <ul className="bg-ghostWhite-400 dark:bg-yankeesBlue-400 flex flex-col gap-y-6 p-6 list-none">
                <li className="flex justify-between items-center">
                  <div className="flex flex-col justify-center gap-y-2">
                    <h5 className="invoiceFieldPrimaryHeader text-chineseBlack dark:text-white font-bold">Banner Design</h5>
                    <span className="invoiceFieldPrimaryHeader font-bold dark:text-coolGrey-600">1 x £ 156.00</span>
                  </div>
                  <span className="invoiceFieldPrimaryHeader text-chineseBlack dark:text-white font-bold">£ 156.00</span>
                </li>

                <li className="flex justify-between items-center">
                  <div className="flex flex-col justify-center gap-y-2">
                    <h5 className="invoiceFieldPrimaryHeader text-chineseBlack dark:text-white font-bold">Email Design</h5>
                    <span className="invoiceFieldPrimaryHeader font-bold dark:text-coolGrey-600">2 x £ 200.00</span>
                  </div>
                  <span className="invoiceFieldPrimaryHeader text-chineseBlack dark:text-white font-bold">£ 400.00</span>
                </li>
              </ul>

              <div className="bg-charcoal dark:bg-chineseBlack flex items-center justify-between p-6">
                <span className="invoiceFieldPrimaryHeader text-white text-[11px] tracking-[-0.23px] leading-[18px]">Amount Due</span>
                <h3 className="text-white font-bold text-xl leading-[32px] tracking-[-0.42px]">£ 556.00</h3>
              </div>
            </article>
          </main>
        </section>
      </div>
    </Fragment>
  )
}