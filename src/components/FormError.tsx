import { ReactNode } from "react";
import styles from "./FormError.module.css";

interface FormErrorProps {
  children: ReactNode;
}

export function FormError({ children }: FormErrorProps) {
  return <div className={styles.formError}>{children}</div>;
}
