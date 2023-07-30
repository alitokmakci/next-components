"use client";
import React, { useEffect, useId, useRef } from "react";
import { DropdownItemProps, DropdownToggleProps } from "./type";
import styles from "./index.module.css";
import useClickOutside from "@ui/hooks/useClickOutside";
import Link from "next/link";

export default function Dropdown({ children }: { children: React.ReactNode }) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dropdownRef.current) {
      return () => null;
    }

    const dropdown = dropdownRef.current;
    const toggle = dropdown.querySelector(
      '[data-dropdown="@ui-dropdown-toggle"]'
    );
    const menu = dropdown.querySelector('[data-dropdown="@ui-dropdown-menu"]');
    const menuItems = dropdown.querySelectorAll(
      '[data-dropdown="@ui-dropdown-item"]'
    );

    const clickListener = () => {
      menu?.classList.toggle(styles.show);
    };

    toggle?.addEventListener("click", clickListener);
    menuItems.forEach((item) => {
      item.addEventListener("click", clickListener);
    });

    return () => {
      toggle?.removeEventListener("click", clickListener);
      menuItems.forEach((item) => {
        item.removeEventListener("click", clickListener);
      });
    };
  }, [dropdownRef]);

  function handleClickOutsideMenu() {
    const dropdown = dropdownRef.current;
    const menu = dropdown?.querySelector('[data-dropdown="@ui-dropdown-menu"]');
    menu?.classList.remove(styles.show);
  }

  useClickOutside(dropdownRef, handleClickOutsideMenu);

  return (
    <div
      ref={dropdownRef}
      data-dropdown="@ui-dropdown"
      className={styles.dropdown}
    >
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
      data-dropdown="@ui-dropdown-item"
      className={styles.item}
    >
      {children}
    </div>
  );
}

export function DropdownMenu({ children }: { children: React.ReactNode }) {
  return (
    <div data-dropdown="@ui-dropdown-menu" className={styles.menu}>
      {children}
    </div>
  );
}

export function DropdownToggle({ children }: DropdownToggleProps) {
  return (
    <div data-dropdown="@ui-dropdown-toggle" className="cursor-pointer">
      {children}
      <i className="ri-arrow-drop-down-line" />
    </div>
  );
}
