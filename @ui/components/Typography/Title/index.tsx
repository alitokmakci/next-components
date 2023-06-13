import React from "react";
import styles from "../index.module.css";
import classNames from "classnames";
import { TitleProps } from "./type";

export default function Title({
  children,
  className,
  color = "text",
  ...props
}: TitleProps) {
  return (
    <h1
      {...props}
      className={classNames(className, styles.title, styles[color])}
    >
      {children}
    </h1>
  );
}
