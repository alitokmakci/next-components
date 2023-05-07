import { UIColorWithWhite, UITextColor } from "@ui/ui";

export interface TitleProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  children: string;
  color?: UIColorWithWhite | UITextColor;
}
