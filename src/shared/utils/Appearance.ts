import { State } from '../enums/Status';

type StateResponse = {
  backgroundColor: string;
  textColor: string;
  circleColor: string;
  text: string;
};

export class Appearance {

  /**
   * Method to get Status colors
   * @param state
   * @returns 
   */
  public getStatusColors(state: State): StateResponse {
    switch (state) {
      case State.Paid:
        return {
          backgroundColor: 'bg-eucalyptusTranslucid',
          textColor: 'text-eucalyptus',
          circleColor: 'before:bg-eucalyptus',
          text: 'Paid'
        }

      case State.Pending:
        return {
          backgroundColor: 'bg-darkOrangeTranslucid',
          textColor: 'text-darkOrange',
          circleColor: 'before:bg-darkOrange',
          text: 'Pending'
        }

      case State.Draft:
        return {
          backgroundColor: 'bg-charcoalTranslucid dark:bg-lavenderTranslucid',
          textColor: 'text-charcoal dark:text-lavender',
          circleColor: 'before:bg-charcoal dark:before:bg-lavender',
          text: 'Draft'
        }
    }
  }

}