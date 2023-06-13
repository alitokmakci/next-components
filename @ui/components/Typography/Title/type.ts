import { UIColorPalette } from "@ui/ui";
import React from "react";

export interface TitleProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  children: string;
  color?: UIColorPalette;
}
