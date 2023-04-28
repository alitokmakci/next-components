import React from "react";
import { FormItemProps } from "./type";
import classNames from "classnames";
import styles from "./index.module.css";
import Label from "../Label";

export default function FormItem({
  children,
  className,
  horizontal,
  label,
  required,
  error,
  success,
}: FormItemProps) {
  return (
    <div
      className={classNames(className, styles.formItem, {
        [styles.horizontal]: horizontal,
        [styles.error]: error,
        [styles.success]: success,
      })}
    >
      {label && <Label required={required}>{label}</Label>}
      {children}
    </div>
  );
}
