import { ReactNode } from "react";

import styles from "./Column.module.css";

interface ColumnProps {
  children: ReactNode;
}

export function Column({ children }: ColumnProps): JSX.Element {
  return <div className={styles.column}>{children}</div>;
}
