import { NothingFoundSVG } from "../../../Icons/components";

export function NothingFound() {
  return (
    <section className="w-full h-auto md:h-full flex grow flex-col items-center justify-center px-4 mt-20 md:mt-0">
      <div title="Girl with a megaphone" aria-label="Icon of a girl with megaphone" className="mb-10">
        <NothingFoundSVG />
      </div>

      <article className="flex flex-col items-center justify-center">
        <h2 title="There is nothing here" aria-label="There is nothing here" className="mb-5 text-[20px] text-chineseBlack dark:text-white font-bold">
          There is nothing here
        </h2>

        <p title="Create an invoice by clicking the new button and get started" aria-label="Create an invoice by clicking the new button and get started" className="text-center text-coolGrey-600 dark:text-lavender text-xs tracking-[-0.25px]">
          Create an invoice by clicking the
          <br />
          <strong className="before:content-['New'] md:before:content-['New_invoice']" /> button and get started
        </p>
      </article>
    </section>
  )
};