import { ReactNode } from "react";

export default function NavbarItem({ children }: { children?: ReactNode }) {
  return <button>{children}</button>;
}
