import React from "react";
import { FormItemProps } from "./type";
import classNames from "classnames";
import styles from "./index.module.scss";

export default function FormItem({
  children,
  className,
  horizontal,
}: FormItemProps) {
  return (
    <div
      className={classNames(className, styles.formItem, {
        [styles.horizontal]: horizontal,
      })}
    >
      {children}
    </div>
  );
}
