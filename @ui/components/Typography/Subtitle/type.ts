import { UIColorPalette } from "@ui/ui";
import React from "react";

export interface SubtitleProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
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
