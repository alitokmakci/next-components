export interface DropdownToggleProps {
  children: React.ReactNode;
}

export interface DropdownItemProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
}
