import { CodeProps } from '../../models/CodeProps';

export function Code({ code }: CodeProps) {
  return (
    <div className="grid-in-code md:mr-auto md:w-full">
      <p title={code} className="text-chineseBlack dark:text-white text-xs font-bold">
        <span className="text-ube">#</span>
        {code}
      </p>
    </div>
  );
};