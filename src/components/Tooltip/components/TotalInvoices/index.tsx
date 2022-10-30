import { TotalInvoicesProps } from './../../models/TotalInvoicesProps';
import { useEffect } from 'react';
import { useState } from 'react';


export type MessageProps = {
  longMessage: string;
  shortMessage: string;
};

export function TotalInvoices({ total, filter }: TotalInvoicesProps) {
  const [message, setMessage] = useState<MessageProps | null>(null);

  useEffect(() => {
    const word = createMessage();
    setMessage(word)
  }, [])

  const createMessage = () => {
    const longMessage = `md:before:content-['There_are_${total}_${filter ?? 'total'}_invoices']`;
    const shortMessage = `before:content-['${total}_invoices']`

    return {
      longMessage,
      shortMessage
    };
  };

  return message != null
    ? (
      <p
        role={"note"}
        title={`${total} ${filter ?? 'total'} invoices`}
        aria-label={`${total} ${filter ?? 'total'} invoices`}
        className={`before:content-['50_invoices'] md:before:content-['There_are_50_total_invoices'] before:text-xs before:text-coolGrey-600 dark:before:text-lavender before:font-medium`}
      />
    )
    : null
};