import { UIColorWithWhite, UIPosition, UISize } from "@ui/ui";

export default interface AvatarProps {
  size?: UISize;
  img?: string;
  letter?: string;
  color?: UIColorWithWhite;
  className?: string;
  flat?: boolean;
  square?: boolean;
  circle?: boolean;
  dot?: boolean;
  dotColor?: UIColorWithWhite;
  dotPosition?: UIPosition;
  dotContent?: string;
}
