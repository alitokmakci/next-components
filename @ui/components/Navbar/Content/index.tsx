import { ReactNode } from "react";

export function NavbarLeft({ children }: { children: ReactNode }) {
  return <NavbarContent>{children}</NavbarContent>;
}

export function NavbarCenter({ children }: { children: ReactNode }) {
  return <NavbarContent>{children}</NavbarContent>;
}

export function NavbarRight({ children }: { children: ReactNode }) {
  return <NavbarContent>{children}</NavbarContent>;
}

function NavbarContent({ children }: { children: ReactNode }) {
  return <div className="space-x-6">{children}</div>;
}
