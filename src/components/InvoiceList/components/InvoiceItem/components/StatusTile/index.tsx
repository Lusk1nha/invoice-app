import { StatusProps } from '../../models/StatusProps';
import { Appearance } from '../../../../../../shared/utils/Appearance';

export function StatusTile({ state }: StatusProps) {
  const { backgroundColor, circleColor, text, textColor } = new Appearance().getStatusColors(state)

  return (
    <div title={text} className="grid-in-status w-full h-full flex justify-end items-end md:justify-center md:items-center md:w-full md:mr-auto" >
      <div className={`${backgroundColor} max-w-[104px] w-full md:w-[104px] h-10 rounded-[6px] flex items-center justify-center p-2`}>
        <p title={text} aria-label={text} className={`${textColor} text-xs font-bold flex items-center justify-center grow tracking-[-0.25px] ${circleColor} before:w-2 before:h-2 before:rounded-full before:mr-2`}>
          {text}
        </p>
      </div>
    </div >
  )
}