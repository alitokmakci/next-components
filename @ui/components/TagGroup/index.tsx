import React from "react";
import { TagGroupProps } from "./type";
import styles from "@ui/components/Tag/index.module.css";

export default function TagGroup({ children }: TagGroupProps) {
  return <span className={styles.tagGroup}>{children}</span>;
}
