import { UIGap } from "@ui/ui";

export interface RowProps {
  gap?: UIGap;
  gapX?: UIGap;
  gapY?: UIGap;
  className?: string;
  children: React.ReactNode;
  auto?: boolean;
}
