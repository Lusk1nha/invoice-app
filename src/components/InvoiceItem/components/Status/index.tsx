import { State } from '../../../../shared/enums/Status';
import { StatusProps } from './../../models/StatusProps';
import { useState } from 'react';
import { useEffect } from 'react';

type AppearanceStateProps = {
  backgroundColor: string;
  textColor: string;
  circleColor: string;
  text: string;
};

export function Status({ state }: StatusProps) {
  const [appearance, setAppearance] = useState<AppearanceStateProps | null>(null);

  useEffect(() => {
    const getAppearance = selectStateAppearance(state);

    if (getAppearance != null) {
      setAppearance(
        getAppearance
      )
    };
  }, [state]);

  const selectStateAppearance = (state: string) => {
    switch (state) {
      case State.Paid:
        return {
          backgroundColor: 'bg-eucalyptusTranslucid',
          textColor: 'text-eucalyptus',
          circleColor: 'before:bg-eucalyptus',
          text: 'Paid'
        }
        break;

      case State.Pending:
        return {
          backgroundColor: 'bg-darkOrangeTranslucid',
          textColor: 'text-darkOrange',
          circleColor: 'before:bg-darkOrange',
          text: 'Pending'
        }
        break;

      case State.Draft:
        return {
          backgroundColor: 'bg-charcoalTranslucid dark:bg-lavenderTranslucid',
          textColor: 'text-charcoal dark:text-lavender',
          circleColor: 'before:bg-charcoal dark:before:bg-lavender',
          text: 'Draft'
        }
        break;

      default:
        console.error('State not found');
        break;
    }
  };

  return appearance != null
    ? (
      <div title={appearance.text} className="grid-in-status w-full h-full flex justify-end items-end md:justify-center md:items-center md:w-full md:mr-auto">
        <div className={`${appearance.backgroundColor} max-w-[104px] w-full md:w-[104px] h-10 rounded-[6px] flex items-center justify-center p-2`}>
          <p className={`${appearance.textColor} text-xs font-bold flex items-center justify-center grow tracking-[-0.25px] ${appearance.circleColor} before:w-2 before:h-2 before:rounded-full before:mr-2`}>
            {appearance.text}
          </p>
        </div>
      </div>
    )
    : null
}