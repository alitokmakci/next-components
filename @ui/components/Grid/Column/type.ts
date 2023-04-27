import { UIGridOption, UIOffsetOption } from "@ui/ui";

export interface ColumnProps {
  sm?: UIGridOption;
  md?: UIGridOption;
  lg?: UIGridOption;
  xl?: UIGridOption;
  xxl?: UIGridOption;
  span?: UIGridOption;
  className?: string;
  offset?: UIOffsetOption;
  children?: React.ReactNode;
  contentWidth?: boolean;
}
