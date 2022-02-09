import { useState } from "react";
import data from "./data/data.json";
import styles from "./App.module.css";
import { List } from "./components/List";
import { Form } from "./components/Form";

export function App(): JSX.Element {
  const [page, setPage] = useState<"List" | "Form">("List");
  return (
    <>
      <nav className={styles.nav}>
        <span className={styles.nav__button} onClick={() => setPage("List")}>
          List
        </span>
        <span className={styles.nav__button} onClick={() => setPage("Form")}>
          Form
        </span>
      </nav>
      {page === "List" && <List data={data} initialSortKey="id" />}
      {page === "Form" && <Form />}
    </>
  );
}
