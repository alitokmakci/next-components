import { UITextColor } from "@ui/ui";

export interface LabelProps {
  color?: UITextColor;
  required?: boolean;
  className?: string;
  children?: React.ReactNode;
}
