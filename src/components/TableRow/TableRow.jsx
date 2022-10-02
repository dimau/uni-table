import React from "react";
import { TableCell } from "../TableCell/TableCell";
import styles from "./styles.module.css";

export function TableRow() {
  return (
    <tr className={styles.root}>
      <TableCell content="First cell" />
      <TableCell content="Really big content for cell" />
      <TableCell content="One more cell" />
    </tr>
  );
}
