import React from "react";
import { TableRow } from "../TableRow/TableRow";
import styles from "./styles.module.css";

export function TableBody() {
  return (
    <tbody className={styles.root}>
      <TableRow />
      <TableRow />
      <TableRow />
    </tbody>
  );
}
