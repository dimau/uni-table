import React from "react";
import styles from "./styles.module.css";

interface TableCellProps {
  content: string;
}

export function TableCell({ content }: TableCellProps) {
  return <td className={styles.root}>{content}</td>;
}
