"use client";
import React from "react";
import { TagProps } from "./type";
import classNames from "classnames";
import styles from "./index.module.css";

export default function Tag({
  children,
  size = "md",
  color = "primary",
  className,
  flat,
  onClose,
  show = true,
  showClose,
}: TagProps) {
  const [isOpen, setIsOpen] = React.useState(show);
  const [isHidden, setIsHidden] = React.useState(false);

  function handleClose(e: React.MouseEvent<HTMLButtonElement>) {
    if (onClose) {
      const result = onClose(e);

      setIsOpen(result);
      setHiddenToTag();
      return;
    }

    setIsOpen(false);
    setHiddenToTag();
  }

  function setHiddenToTag() {
    setTimeout(() => {
      setIsHidden(true);
    }, 300);
  }

  React.useEffect(() => {
    setIsOpen(show);
  }, [show]);

  return (
    <span
      className={classNames(
        className,
        styles.tag,
        styles[color],
        styles[size],
        {
          [styles.flat]: flat,
          [styles.hiddenTag]: !isOpen,
          [styles.none]: isHidden,
        }
      )}
    >
      {children}
      {showClose && (
        <button onClick={handleClose} className={styles.close}></button>
      )}
    </span>
  );
}
