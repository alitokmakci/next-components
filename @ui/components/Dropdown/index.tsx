"use client";
import React, { useEffect, useId, useRef } from "react";
import { DropdownItemProps, DropdownToggleProps } from "./type";
import styles from "./index.module.css";
import classNames from "classnames";
import useClickOutside from "@ui/hooks/useClickOutside";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Dropdown({ children }: { children: React.ReactNode }) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dropdownRef.current) {
      return () => null;
    }

    const dropdown = dropdownRef.current;
    const toggler = dropdown.querySelector(".dropdown-toggle");
    const menu = dropdown.querySelector(".dropdown-menu");
    const menuItems = dropdown.querySelectorAll(".dropdown-item");

    const clickListener = () => {
      menu?.classList.toggle(styles.show);
    };

    toggler?.addEventListener("click", clickListener);
    menuItems.forEach((item) => {
      item.addEventListener("click", clickListener);
    });

    return () => {
      toggler?.removeEventListener("click", clickListener);
      menuItems.forEach((item) => {
        item.removeEventListener("click", clickListener);
      });
    };
  }, [dropdownRef]);

  function handleClickOutsideMenu() {
    const dropdown = dropdownRef.current;
    const menu = dropdown?.querySelector(".dropdown-menu");
    menu?.classList.remove(styles.show);
  }

  useClickOutside(dropdownRef, handleClickOutsideMenu);

  return (
    <div ref={dropdownRef} className={styles.dropdown}>
      {children}
    </div>
  );
}

export function DropdownItem({ children, onClick, href }: DropdownItemProps) {
  return href ? (
    <Link href={href} onClick={onClick}>
      {children}
    </Link>
  ) : (
    <div
      onClick={onClick}
      role="presentation"
      className={classNames("dropdown-item", styles.item)}
    >
      {children}
    </div>
  );
}

export function DropdownMenu({ children }: { children: React.ReactNode }) {
  return (
    <div className={classNames("dropdown-menu", styles.menu)}>{children}</div>
  );
}

export function DropdownToggle({ children }: DropdownToggleProps) {
  return <div className="dropdown-toggle">{children}</div>;
}
