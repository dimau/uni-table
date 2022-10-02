import React from "react";
import styles from "./styles.module.css";

export function TableCell({ content }) {
  return <td className={styles.root}>{content}</td>;
}
