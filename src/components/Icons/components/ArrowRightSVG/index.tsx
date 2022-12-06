import { SVGIconProps } from "../../models/SVGIconProps";

export function ArrowRightSVG({ fill, stroke, className }: SVGIconProps) {
  return (
    <svg className={className} fill={fill} width="7" height="10" xmlns="http://www.w3.org/2000/svg">
      <path className={className} fill={fill} d="M1 1l4 4-4 4" stroke={stroke} strokeWidth="2" fillRule="evenodd"/>
    </svg>
  );
}