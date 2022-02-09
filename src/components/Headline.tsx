import styles from "./Headline.module.css";
import { Order } from "../types";
import { OrderIndicator } from "./OrderIndicator";

interface HeadlineProps {
  text: string;
  active?: boolean;
  sortingOrder: Order;
  onClick: () => void;
}

export function Headline({
  text,
  active = false,
  onClick,
  sortingOrder,
}: HeadlineProps): JSX.Element {
  const classNames = !active
    ? styles.headline
    : `${styles.headline} ${styles.headline__active}`;

  return (
    <div className={classNames} onClick={onClick}>
      <div>{text}</div>
      {active && <OrderIndicator order={sortingOrder} />}
    </div>
  );
}
