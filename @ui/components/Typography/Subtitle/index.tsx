import React from "react";
import styles from "../index.module.css";
import classNames from "classnames";
import { SubtitleProps } from "./type";

export default function Subtitle({
  children,
  className,
  color = "text",
  ...props
}: SubtitleProps) {
  return (
    <p
      {...props}
      className={classNames(className, styles.subtitle, styles[color])}
    >
      {children}
    </p>
  );
}
