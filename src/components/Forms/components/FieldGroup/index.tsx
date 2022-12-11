import { FieldGroupProps } from "../NewInvoiceForm/models/FieldGroupProps";

export function FieldGroup({ label, children }: FieldGroupProps) {
  return (
    <fieldset className="flex flex-col grow gap-y-6 mb-10">
      <legend className="text-xs font-bold text-brightPurple mb-6 tracking-[-0.25px]" title={label} aria-label={label}>
        {label}:
      </legend>

      {children}
    </fieldset>
  );
}