import { TotalInvoicesProps } from './../../models/TotalInvoicesProps';

export function TotalInvoices({ total, filter }: TotalInvoicesProps) {
  const message = createMessage()
  const shortMessage = message.shortMessage
  const longMessage = message.longMessage

  function createMessage() {
    const longMessage = `before:content-['There_are_${total}_${filter ?? 'total'}_invoices']`
    const shortMessage = `before:content-['${total}_invoices']`

    return {
      longMessage,
      shortMessage
    };
  }

  return message != null
    ? (
      <p
        title={`${total} ${filter ?? 'total'} invoices`}
        aria-label={`${total} ${filter ?? 'total'} invoices`}
        className={` before:text-xs before:text-coolGrey-600 dark:before:text-lavender before:font-medium ${shortMessage} md:${longMessage}`}
      />
    )
    : null
};