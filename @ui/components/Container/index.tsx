import React from "react";
import { ContainerProps } from "./type";
import classNames from "classnames";
import styles from "./index.module.css";

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={classNames(className, styles.uiContainer)}>{children}</div>
  );
}
