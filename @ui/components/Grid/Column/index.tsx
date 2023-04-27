import React from "react";
import { ColumnProps } from "./type";
import styles from "../index.module.css";
import classNames from "classnames";

export default function Column({
  span,
  sm,
  md,
  lg,
  xl,
  xxl,
  offset = 0,
  className,
  children,
  contentWidth,
}: ColumnProps) {
  return (
    <div
      className={classNames(className, styles.column, {
        [styles.contentWidth]: contentWidth,
        [styles[`span${span}`]]: span,
        [styles[`offset${offset}`]]: offset,
        [styles[`sm${sm}`]]: sm,
        [styles[`md${md}`]]: md,
        [styles[`lg${lg}`]]: lg,
        [styles[`xl${xl}`]]: xl,
        [styles[`xxl${xxl}`]]: xxl,
      })}
    >
      {children}
    </div>
  );
}
