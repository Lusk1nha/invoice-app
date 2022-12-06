import { DateProps } from "../../models/DateProps";

export function Date({ date }: DateProps) {
  return (
    <div className="grid-in-date flex items-end md:mr-auto md:w-full">
      <p title={date} className="text-ube dark:text-lavender text-xs font-medium tracking-[-0.25px]">
        <span className="text-coolGrey-600 dark:text-lavender mr-1">Due</span>
        {date}
      </p>
    </div>
  )
};