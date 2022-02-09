import { ReactNode } from "react";
import styles from "./ListItem.module.css";

interface ListItemProps {
  children: ReactNode;
}

export function ListItem({ children }: ListItemProps): JSX.Element {
  return <div className={styles.listItem}>{children}</div>;
}
