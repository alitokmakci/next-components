import React from "react";
import styles from "./index.module.css";
import classNames from "classnames";
import { ParagraphProps } from "./type";

export default function Paragraph({
  children,
  className,
  color = "text",
  ...props
}: ParagraphProps) {
  return (
    <p
      {...props}
      className={classNames(className, styles.paragraph, styles[color])}
    >
      {children}
    </p>
  );
}
