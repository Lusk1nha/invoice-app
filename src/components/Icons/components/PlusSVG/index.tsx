import { SVGIconProps } from "../../models/SVGIconProps";

export function PlusSVG({ fill, className }: SVGIconProps) {
  return (
    <svg className={className} fill={fill} width="11" height="11" xmlns="http://www.w3.org/2000/svg">
      <path className={className} fill={fill} d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z" fillRule="nonzero"/>
    </svg>
  )
}