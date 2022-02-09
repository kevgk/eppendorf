import { Order } from "../types";
import { isDateString } from "./isDateString";

export function compareAsc(a: any, b: any) {
  return a > b ? 1 : -1;
}

export function compareDesc(a: any, b: any) {
  return a < b ? 1 : -1;
}

export function sortBy(unsorted: any[], key: string, order: Order) {
  const compareFunc = order === "desc" ? compareDesc : compareAsc;
  const isDate = isDateString(unsorted[0][key]);

  const sorted = [...unsorted].sort((a, b) => {
    const transformedA = isDate ? new Date(a[key]) : a[key];
    const transformedB = isDate ? new Date(b[key]) : b[key];

    return compareFunc(transformedA, transformedB);
  });

  return sorted;
}
