import React from "react";
import { TableRow } from "../TableRow/TableRow";
import styles from "./styles.module.css";
import { Entity } from "../../models";

interface TableHeaderProps {
  headers: Entity;
}

export function TableHeader({ headers }: TableHeaderProps) {
  return (
    <thead className={styles.root}>
      <TableRow entity={headers} />
    </thead>
  );
}
