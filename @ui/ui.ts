export type UIColor =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "dark";

export type UIColorWithWhite = UIColor | "white";

export type UISizeUpMD = "md" | "lg" | "xl";

export type UISizeDownMD = "xs" | "sm";

export type UISize = UISizeDownMD | UISizeUpMD;

export interface UIConfig {
  buttonRippleEffect: boolean;
}
