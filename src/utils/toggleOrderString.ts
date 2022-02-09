import { Order } from "../types";

export function toggleOrderString(order: string): Order {
  return order === "asc" ? "desc" : "asc";
}
