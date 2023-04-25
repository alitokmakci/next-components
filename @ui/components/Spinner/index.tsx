import React from "react";
import { SpinnerProps } from "./type";
import styles from "./index.module.css";
import classNames from "classnames";

export default function Spinner({
  size = "md",
  color = "white",
}: SpinnerProps) {
  return (
    <div className={classNames(styles.spinner, styles[color], styles[size])} />
  );
}
