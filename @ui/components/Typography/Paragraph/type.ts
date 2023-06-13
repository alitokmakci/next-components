import { UIColorPalette } from "@ui/ui";
import React from "react";

export interface ParagraphProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  children: string;
  color?: UIColorPalette;
}
