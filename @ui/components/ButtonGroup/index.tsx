import React from "react";
import { ButtonGroupProps } from "./type";
import styles from "@ui/components/Button/index.module.css";

export default function ButtonGroup({ children }: ButtonGroupProps) {
  return <div className={styles.btnGroup}>{children}</div>;
}
