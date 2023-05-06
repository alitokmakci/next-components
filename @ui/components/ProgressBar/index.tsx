import React from "react";
import { ProgressBarProps } from "./type";
import styles from "./index.module.css";
import classNames from "classnames";

export default function ProgressBar({
  label,
  showLabel = true,
  percentage,
  color = "primary",
  size = "md",
  animate,
}: ProgressBarProps) {
  const getLabel = () => {
    if (!showLabel) {
      return null;
    }

    if (!label) {
      return `%${percentage.toString()}`;
    }

    return label;
  };

  return (
    <div className={styles.progressbar}>
      <div
        className={classNames(styles.progress, styles[color], styles[size])}
        style={{
          width: `${percentage}%`,
        }}
      >
        {getLabel()}
        {animate && <div className={styles.animation}></div>}
      </div>
    </div>
  );
}
