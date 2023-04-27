import React from "react";
import styles from "../index.module.css";
import classNames from "classnames";
import { RowProps } from "./type";

export default function Row({
  className,
  children,
  gapX,
  gapY,
  gap = 6,
  auto,
}: RowProps) {
  const calculatedXGap = gapX || gap;
  const calculatedYGap = gapY || gap;

  return (
    <div
      className={classNames(
        className,
        styles[`gapX-${calculatedXGap}`],
        styles[`gapY-${calculatedYGap}`],
        {
          [styles.autoCols]: auto,
          [styles.row]: !auto,
        }
      )}
    >
      {children}
    </div>
  );
}
