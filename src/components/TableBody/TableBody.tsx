import React from "react";
import { TableRow } from "../TableRow/TableRow";
import styles from "./styles.module.css";
import { Entity } from "../../models";

interface TableBodyProps {
  entities: { [id: string]: Entity };
}

export function TableBody({ entities }: TableBodyProps) {
  return (
    <tbody className={styles.root}>
      {Object.values(entities).map((entity) => (
        <TableRow key={entity.id} entity={entity} />
      ))}
    </tbody>
  );
}
