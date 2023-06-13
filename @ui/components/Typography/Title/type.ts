import { UIColorPalette } from "@ui/ui";
import React from "react";

export interface TitleProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  children: string;
  color?: UIColorPalette;
  bold?: boolean;
  semiBold?: boolean;
  medium?: boolean;
  italic?: boolean;
  underline?: boolean;
  lineThrough?: boolean;
}
