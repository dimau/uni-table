import React from "react";
import { TableHeader } from "../TableHeader/TableHeader";
import { TableBody } from "../TableBody/TableBody";
import styles from "./styles.module.css";

export function Table() {
  return (
    <table className={styles.root}>
      <TableHeader />
      <TableBody />
    </table>
  );
}
