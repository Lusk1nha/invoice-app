import { PriceProps } from '../../models/PriceProps';

export function Price({ value }: PriceProps) {
  const text = `£ ${numberWithCommas(value)}`

  function numberWithCommas(num: number) {
    const numberInParts = num.toFixed(2).toString().split(".")

    return numberInParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (numberInParts[1] ? "." + numberInParts[1] : "")
  }

  return (
    <div className="grid-in-price md:mr-auto md:w-full">
      <h5 title={text} aria-label={text} className="text-chineseBlack dark:text-white text-base font-bold tracking-[-0.8px]">
        {text}
      </h5>
    </div>
  )
};