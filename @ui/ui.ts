export type UIColor =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "dark";

export type UITextColor = UIColor | "text";

export type UIColorWithWhite = UIColor | "white";

export type UISizeUpMD = "md" | "lg" | "xl";

export type UISizeDownMD = "xs" | "sm";

export type UISize = UISizeDownMD | UISizeUpMD;

export type UIPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

export type UIGridOption = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type UIOffsetOption = UIGridOption | 0;

export type UIGap = UIOffsetOption;

export interface UIConfig {
  buttonRippleEffect: boolean;
}
