import { useMemo } from "react";

import styles from "./List.module.css";
import { useSortedData } from "../hooks/useSortedData";
import { getKeysFromObjectArray } from "../utils/getKeysFromObjects";
import { Column } from "./Column";
import { ListItem } from "./ListItem";
import { Headline } from "./Headline";
import { Container } from "./Container";

interface ListProps {
  data: any[];
  initialSortKey: string;
}

export function List({ data, initialSortKey }: ListProps): JSX.Element {
  const { sorted, sortOrder, toggleOrder, sortKey, setSortKey } = useSortedData(
    data,
    initialSortKey
  );
  const columnNames = useMemo(() => getKeysFromObjectArray(data), [data]);

  function handleClick(columnName: string) {
    if (columnName !== sortKey) {
      setSortKey(columnName);
    } else {
      toggleOrder();
    }
  }

  return (
    <>
      <Container>
        <p>Click on a column header to sort</p>
      </Container>
      <div className={styles.table}>
        {columnNames.map((columnName) => (
          <Column key={columnName}>
            <ListItem>
              <Headline
                active={sortKey === columnName}
                sortingOrder={sortOrder}
                text={columnName}
                onClick={() => handleClick(columnName)}
              />
            </ListItem>
            {sorted.map((item, i) => {
              const value = item[columnName] ?? "-";
              return (
                <ListItem key={`${item[columnName]}-${i}`}>{value}</ListItem>
              );
            })}
          </Column>
        ))}
      </div>
    </>
  );
}
