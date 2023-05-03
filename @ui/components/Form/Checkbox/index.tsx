import React from "react";
import styles from "./index.module.css";
import CheckboxProps from "./type";
import classNames from "classnames";

export default function Checkbox({
  children,
  color,
  circle,
  bordered,
  flat,
  ...inputProps
}: CheckboxProps) {
  return (
    <div className={classNames(styles.checkbox, color && styles[color])}>
      <input
        {...inputProps}
        className={classNames(styles.input)}
        type="checkbox"
      />
      <div
        className={classNames(styles.box, {
          [styles.circle]: circle,
          [styles.bordered]: bordered,
          [styles.flat]: flat,
        })}
      >
        <div className={styles.check}></div>
      </div>
      <span className={styles.label}>{children}</span>
    </div>
  );
}
