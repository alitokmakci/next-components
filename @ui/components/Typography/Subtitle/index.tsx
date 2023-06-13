import React from "react";
import styles from "../index.module.css";
import classNames from "classnames";
import { SubtitleProps } from "./type";

export default function Subtitle({
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
}: SubtitleProps) {
  return (
    <p
      {...props}
      className={classNames(className, styles.subtitle, styles[color], {
        [styles.bold]: bold,
        [styles.semiBold]: semiBold,
        [styles.medium]: medium,
        [styles.italicText]: italic,
        [styles.underlineText]: underline,
        [styles.lineThrough]: lineThrough,
      })}
    >
      {children}
    </p>
  );
}
