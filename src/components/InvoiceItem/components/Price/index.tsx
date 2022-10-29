import { PriceProps } from '../../models/PriceProps';

export function Price({ value }: PriceProps) {
  return (
    <div className="grid-in-price md:mr-auto md:w-full">
      <h5 title={value} className="text-chineseBlack dark:text-white text-base font-bold tracking-[-0.8px]">
        {value}
      </h5>
    </div>
  )
};