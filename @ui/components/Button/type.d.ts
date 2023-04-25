import { UIColor, UIColorWithWhite, UISize } from "../ui";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  bordered?: boolean;
  flat?: boolean;
  color?: UIColor;
  size?: UISize;
  square?: boolean;
  pill?: boolean;
  block?: boolean;
  loading?: boolean;
  spinnerColor?: UIColorWithWhite;
}
