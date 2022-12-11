import { useContext } from 'react';
import { FormContext } from '../../../../../../context/components';
import { OptionsProps } from './OptionsProps';

export function Options({ name, options, onChange }: OptionsProps) {
  const { setValue } = useContext(FormContext)

  function handleOptionClick(text: string, value: string | number) {
    setValue(name, value)
    onChange(text)
  }

  return (
    <ul className="w-full bg-white dark:bg-yankeesBlue-400 absolute left-0 top-[125%] rounded-lg shadow-lg z-10">
      {
        options.map(({ text, value }, index) => (
          <li onClick={e => handleOptionClick(text, value)} value={value} className="dropdownOption" aria-label={text} title={text} key={index}>
            {text}
          </li>
        ))
      }
    </ul>
  )
}