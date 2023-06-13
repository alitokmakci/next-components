import classNames from "classnames";
import styles from "./index.module.css";
import React from "react";
import SwitchProps from "./type";

export default function Switch({
  color = "primary",
  size = "md",
  square,
  flat,
  ...inputProps
}: SwitchProps) {
  return (
    <div
      className={classNames(styles.switchWrapper, styles[size], styles[color], {
        [styles.square]: square,
        [styles.flat]: flat,
      })}
    >
      <input
        {...inputProps}
        className={classNames(styles.input)}
        type="checkbox"
      />
      <div className={styles.switch}></div>
    </div>
  );
}
