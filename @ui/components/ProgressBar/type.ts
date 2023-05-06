import { UIColor, UISizeUpMD } from "@ui/ui";

export interface ProgressBarProps {
  showLabel?: boolean;
  label?: string;
  percentage: number;
  color?: UIColor;
  size?: UISizeUpMD;
  animate?: boolean;
}
