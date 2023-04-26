import { UIColorWithWhite, UISizeUpMD } from "@ui/ui";
import { ReactNode } from "react";

export interface TagProps {
  children: ReactNode;
  flat?: boolean;
  color?: UIColorWithWhite;
  size?: UISizeUpMD;
  className?: string;
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => boolean;
  show?: boolean;
  showClose?: boolean;
}
