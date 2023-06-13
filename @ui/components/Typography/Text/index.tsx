import React from "react";
import styles from "../index.module.css";
import classNames from "classnames";
import { TextProps } from "./type";

export default function Text({
  children,
  className,
  color = "text",
  bold,
  semiBold,
  medium,
  italic,
  underline,
  lineThrough,
  ...props
}: TextProps) {
  return (
    <span
      {...props}
      className={classNames(className, styles.text, styles[color], {
        [styles.bold]: bold,
        [styles.semiBold]: semiBold,
        [styles.medium]: medium,
        [styles.italicText]: italic,
        [styles.underlineText]: underline,
        [styles.lineThrough]: lineThrough,
      })}
    >
      {children}
    </span>
  );
}
