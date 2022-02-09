import { ReactNode } from "react";

import styles from "./CenterWrapper.module.css";

interface CenterWrapperProps {
  children: ReactNode;
}

export function CenterWrapper({ children }: CenterWrapperProps) {
  return <div className={styles.centerWrapper}>{children}</div>;
}
