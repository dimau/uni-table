import React from "react";
import { TableCell } from "../TableCell/TableCell";
import styles from "./styles.module.css";
import { Entity } from "../../models";

interface TableRowProps {
  entity: Entity;
}

export function TableRow({ entity }: TableRowProps) {
  return (
    <tr className={styles.root}>
      {Object.values(entity).map((prop) => (
        <TableCell key={prop} content={prop} /> // TODO: change key
      ))}
    </tr>
  );
}
