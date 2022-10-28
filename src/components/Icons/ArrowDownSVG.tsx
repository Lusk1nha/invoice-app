import { SVGIconProps } from "./SVGIconProps";

export function ArrowDownSVG({ fill, className }: SVGIconProps) {
  return (
    <svg className={className} fill={fill} width="11" height="7" xmlns="http://www.w3.org/2000/svg">
      <path className={className} fill={fill} d="M1 1l4.228 4.228L9.456 1" strokeWidth="2" fillRule="evenodd" />
    </svg>
  );
}