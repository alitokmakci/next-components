import React from "react";
import { ButtonProps } from "./type";
import classNames from "classnames";
import styles from "./index.module.css";

export default function TextButton({
  className,
  color = "primary",
  size = "md",
  children,
  square,
  ...buttonProps
}: ButtonProps) {
  return (
    <button
      {...buttonProps}
      className={classNames(
        className,
        styles.button,
        styles[size],
        styles[color],
        {
          [styles.square]: square,
        }
      )}
    >
      {children}
    </button>
  );
}
