import React from "react";
import { TableCell } from "../TableCell/TableCell";
import styles from "./styles.module.css";

export function TableRow({ entity }) {
  return (
    <tr className={styles.root}>
      {Object.values(entity).map((prop) => (
        <TableCell key={prop} content={prop} /> // TODO: change key
      ))}
    </tr>
  );
}
