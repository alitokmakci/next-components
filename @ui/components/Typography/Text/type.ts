import { UIColorPalette } from "@ui/ui";
import React from "react";

export interface TextProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
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
