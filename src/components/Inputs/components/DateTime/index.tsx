import { DateTimeProps } from './models/DateTimeProps';
import { useState } from 'react';
import { Label } from './../Label/index';
import { DatePicker } from './components';
import { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

export function DateTime({ id, name, title, disableLabelInTablet, className, placeholder, defaultDate, preventDefaultStyle, disabled }: DateTimeProps) {
  const [shownDate, setShownDate] = useState<Dayjs>(defaultDate ?? dayjs());
  const [selectedDate, setSelectedDate] = useState<Dayjs>(defaultDate ?? dayjs());

  const defaultClassName = 'w-full flex flex-col items-start justify-center grow text-red-500';

  function handleDateChange(date: Dayjs) {
    setSelectedDate(date)
  };

  function handleShownDate(date: Dayjs) {
    setShownDate(date)
  };

  return (
    <div className={`${preventDefaultStyle ? `${className} ${defaultClassName}` : className ?? defaultClassName} ${disabled ? 'outline-none border-none pointer-events-none' : ''}`}>
      <Label
        id={id}
        title={title}
        disableInTablet={disableLabelInTablet}
      />

      <DatePicker
        name={name}
        shownDate={shownDate}
        selectedDate={selectedDate}
        onChange={handleDateChange}
        onChangeViewDate={handleShownDate}
      />
    </div>
  )
}