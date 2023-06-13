import React from "react";
import styles from "../index.module.css";
import classNames from "classnames";
import { ParagraphProps } from "./type";

export default function Paragraph({
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
}: ParagraphProps) {
  return (
    <p
      {...props}
      className={classNames(className, styles.paragraph, styles[color], {
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
