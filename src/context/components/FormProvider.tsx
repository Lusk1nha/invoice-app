import { createContext } from "react";

import { FormContextProps } from '../models/FormContextProps';

export const FormContext = createContext<FormContextProps>({} as FormContextProps);

interface FormProviderProps {
  children: React.ReactNode;
  value: FormContextProps;
};

export function FormProvider({ children, value }: FormProviderProps) {
  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  );
}