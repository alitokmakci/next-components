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

export type UIColorPalette = UITextColor | UIColorWithWhite;

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

// SimpleSpread<L, R> is a simplified version of what happens when you
// do an object spread like {...left, ...right} where left is of type L and
// right is of type R.  It is the type R, with any properties on L that
// don't exist in R.  (It doesn't work if a key in L is an optional property in
// R, which is why this is simplified)
export type SimpleSpread<L, R> = R & Pick<L, Exclude<keyof L, keyof R>>;

const theme = {
  avatar: {
    main: "inline-flex items-center justify-center rounded-md font-semibold tracking-wide relative",
    sm: "w-10 h-10 text-lg",
    xs: "",
  },
};
