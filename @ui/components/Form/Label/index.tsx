import React from "react";
import { LabelProps } from "./type";
import classNames from "classnames";
import styles from "./index.module.css";
import formItemStyles from "../FormItem/index.module.css";

export default function Label({
  color = "text",
  required,
  className,
  children,
}: LabelProps) {
  return (
    <span
      className={classNames(
        className,
        formItemStyles.label,
        styles[color],
        styles.label
      )}
    >
      {required && <span className={styles.required}>*</span>}
      {children}
    </span>
  );
}
