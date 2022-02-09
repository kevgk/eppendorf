import { Order } from "../types";
import styles from "./OrderIndicator.module.css";

interface OrderIndicatorProps {
  order: Order;
}

export function OrderIndicator({ order }: OrderIndicatorProps): JSX.Element {
  return (
    <span className={styles.indicator}>{order === "asc" ? "⯅" : "⯆"}</span>
  );
}
