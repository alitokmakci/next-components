import classNames from "classnames";
import React from "react";
import { SectionProps } from "./type";
import styles from "./index.module.css";

export default function Section({ className, children }: SectionProps) {
  return (
    <section className={classNames(className, styles.section)}>
      {children}
    </section>
  );
}
