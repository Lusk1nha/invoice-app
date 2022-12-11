import dayjs from "dayjs";
import { DateProps } from "../../models/DateProps";

export function Date({ date }: DateProps) {
  const newDate = dayjs(date)
  const minimumDateFormatted = newDate.format('DD MMM YYYY')
  const maximumDateFormatted = newDate.format('DD MMMM YYYY')

  return (
    <div className="grid-in-date flex items-end md:mr-auto md:w-full">
      <p title={maximumDateFormatted} aria-label={maximumDateFormatted} className="text-ube dark:text-lavender text-xs font-medium tracking-[-0.25px]">
        <span className="text-coolGrey-600 dark:text-lavender mr-1">Due</span>
        {minimumDateFormatted}
      </p>
    </div>
  )
};