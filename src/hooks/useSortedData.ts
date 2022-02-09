import { useMemo, useState } from "react";

import { Order } from "../types";
import { sortBy } from "../utils/sortBy";
import { toggleOrderString } from "../utils/toggleOrderString";

interface UseSortedDataReturn<T> {
  sorted: T[];
  sortOrder: Order;
  toggleOrder: () => void;
  sortKey: string;
  setSortKey: React.Dispatch<React.SetStateAction<string>>;
}

export function useSortedData<T>(
  data: T[],
  initialSortingKey: string
): UseSortedDataReturn<T> {
  const [sortKey, setSortKey] = useState<string>(initialSortingKey);
  const [sortOrder, setSortOrder] = useState<Order>("desc");

  function toggleOrder() {
    const newOrder = toggleOrderString(sortOrder);
    setSortOrder(newOrder);
  }

  const sorted = useMemo(
    () => sortBy(data, sortKey, sortOrder),
    [data, sortKey, sortOrder]
  );

  return { sorted, sortOrder, toggleOrder, sortKey, setSortKey };
}
