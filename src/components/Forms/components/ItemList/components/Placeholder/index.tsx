import { PlaceholderProps } from "../../models/PlaceholderProps";

export function Placeholder({ labels }: PlaceholderProps) {
  return (
    <div className="hidden md:grid md:grid-areas-itemListFormOnDesktop md:grid-cols-itemListOnDesktop md:grid-rows-itemListOnDesktop md:gap-y-0 md:gap-x-4">
      {labels.map((label, index) => {
        return (
          <label key={index} title={label.title} aria-description={label.ariaDescription} className="text-ube dark:text-coolGrey-600 md:dark:text-lavender text-xs font-medium mb-[10px]">
            {label.text}
          </label>
        )
      })}
    </div>
  );
}