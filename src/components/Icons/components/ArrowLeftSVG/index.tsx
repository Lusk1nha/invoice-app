import { SVGIconProps } from "../../models/SVGIconProps";

export function ArrowLeftSVG({ fill, stroke, className }: SVGIconProps) {
  return (
    <svg className={className} fill={fill} width="7" height="10" xmlns="http://www.w3.org/2000/svg">
      <path className={className} fill={fill} d="M6.342.886L2.114 5.114l4.228 4.228" stroke={stroke} strokeWidth="2" fillRule="evenodd"/>
    </svg>
  )
}