import React from "react";
import styles from "../index.module.css";
import classNames from "classnames";
import { TitleProps } from "./type";

export default function Title({
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
}: TitleProps) {
  return (
    <h1
      {...props}
      className={classNames(className, styles.title, styles[color], {
        [styles.bold]: bold,
        [styles.semiBold]: semiBold,
        [styles.medium]: medium,
        [styles.italicText]: italic,
        [styles.underlineText]: underline,
        [styles.lineThrough]: lineThrough,
      })}
    >
      {children}
    </h1>
  );
}
