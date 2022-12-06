import { PickersProps } from "../../../../models/PickersProps";

export function Pickers({ selectedDate, onChange, rows }: PickersProps) {
  const defaultClassName = 'w-full h-full grow text-chineseBlack  dark:text-lavender hover:text-brightPurple focus:text-brightPurple dark:hover:text-brightPurple dark:focus:text-brightPurple  font-bold text-center transition-all'

  return (
    <div className="flex flex-col justify-start items-start gap-y-5 p-3">
      {rows.map((cells, rowIndex) => (
        <div className="w-full h-full flex items-start justify-start gap-x-2" key={rowIndex}>
          {cells.map(({ text, value, nextMonth, prevMonth }, cellIndex) => (
            <button type="button" value={value.toString()} onClick={() => onChange(value)} className={`${defaultClassName} ${nextMonth || prevMonth ? 'opacity-10' : ''} ${value.toString() === selectedDate.toString() ? 'text-brightPurple dark:text-brightPurple opacity-100' : ''}`} key={`${text} - ${cellIndex}`}>
              {text}
            </button>
          ))}
        </div>
      ))}
    </div>
  )
};