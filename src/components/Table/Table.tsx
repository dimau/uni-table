import React, { useContext } from "react";
import { TableHeader } from "../TableHeader/TableHeader";
import { TableBody } from "../TableBody/TableBody";
import styles from "./styles.module.css";
import { DataWindowContext } from "../../data-window/DataWindow";

export const Table: React.FC<{}> = () => {
  const { entities } = useContext(DataWindowContext);

  return (
    <table className={styles.root}>
      <TableHeader
        headers={{
          id: "id",
          title: "title",
          description: "description",
          deadline: "deadline",
          assignee: "assignee",
        }}
      />
      <TableBody entities={entities} />
    </table>
  );
};
