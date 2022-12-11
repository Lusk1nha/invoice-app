import { NameProps } from '../../models/NameProps';

export function Name({ name }: NameProps) {
  return (
    <div className="grid-in-name flex justify-end md:justify-start md:mr-auto md:w-full">
      <p title={name} aria-label={name} className="text-xs text-coolGrey-600 dark:text-white tracking-[-0.25px] font-medium">
        {name}
      </p>
    </div>
  )
};