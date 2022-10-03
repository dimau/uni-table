import React from "react";
import { TableRow } from "../TableRow/TableRow";
import styles from "./styles.module.css";

export function TableBody({ entities }) {
  return (
    <tbody className={styles.root}>
      {Object.values(entities).map((entity) => (
        <TableRow key={entity.id} entity={entity} />
      ))}
    </tbody>
  );
}
