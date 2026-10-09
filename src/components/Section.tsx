import type { ReactNode } from "react";
import styles from "../sections/Sections.module.css";

type Props = {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
};

// Layout padrão das seções: rótulo numerado à esquerda, conteúdo à direita
export function Section({ id, number, title, children }: Props) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className={styles.label}>
        <span className={styles.number}>{number}</span>
        {title}
      </h2>
      <div className={styles.content}>{children}</div>
    </section>
  );
}
