import { UIColor } from "@ui/ui";
export type UIColor =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "dark";

export type UIColorWithWhite = UIColor | "white";

export type UISize = "xs" | "sm" | "md" | "lg" | "xl";

export interface UIConfig {
  buttonRippleEffect: boolean;
}
