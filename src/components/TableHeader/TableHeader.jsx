import React from "react";
import { TableRow } from "../TableRow/TableRow";
import styles from "./styles.module.css";

export function TableHeader({ headers }) {
  return (
    <thead className={styles.root}>
      <TableRow entity={headers} />
    </thead>
  );
}
