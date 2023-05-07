import { UIColor, UISize } from "@ui/ui";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color?: UIColor;
  size?: UISize;
  square?: boolean;
  href?: string;
}
