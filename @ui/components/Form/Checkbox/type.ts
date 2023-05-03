import { UIColor } from "@ui/ui";

export default interface CheckboxProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  children?: React.ReactNode;
  color?: UIColor;
  circle?: boolean;
  bordered?: boolean;
  flat?: boolean;
}
