import React, { useMemo } from "react";
import Container from "@ui/components/Container";
import NavbarLogo from "@ui/components/Navbar/Logo";
import {
  NavbarCenter,
  NavbarLeft,
  NavbarRight,
} from "@ui/components/Navbar/Content";
import NavbarItem from "@ui/components/Navbar/Item";

export default function Navbar({
  children,
}: {
  children?:
    | React.ReactElement<any, React.JSXElementConstructor<any>>[]
    | React.ReactElement<any, React.JSXElementConstructor<any>>;
}) {
  const left = useMemo(() => {
    if (!Array.isArray(children)) {
      return children?.type.name === "NavbarLeft" ? children : null;
    }

    return children?.find((item) => item.type.name === "NavbarLeft");
  }, [children]);

  const center = useMemo(() => {
    if (!Array.isArray(children)) {
      return children?.type.name === "NavbarCenter" ? children : null;
    }

    return children?.find((item) => item.type.name === "NavbarCenter");
  }, [children]);

  const right = useMemo(() => {
    if (!Array.isArray(children)) {
      return children?.type.name === "NavbarRight" ? children : null;
    }

    return children?.find((item) => item.type.name === "NavbarRight");
  }, [children]);

  return (
    <div className="bg-gray-100 py-2 h-16">
      <Container className="flex items-center justify-between h-full">
        <div>{left}</div>
        <div>{center}</div>
        <div>{right}</div>
      </Container>
    </div>
  );
}

Navbar.Logo = NavbarLogo;
Navbar.Left = NavbarLeft;
Navbar.Center = NavbarCenter;
Navbar.Right = NavbarRight;
Navbar.Item = NavbarItem;
