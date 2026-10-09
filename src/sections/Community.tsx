import { community } from "../data/profile";
import { useI18n } from "../i18n";
import { Section } from "../components/Section";
import styles from "./Sections.module.css";

export function Community() {
  const { lang, t } = useI18n();

  return (
    <Section id="comunidade" number="05" title={t.sections.community}>
      <ul className={styles.rows}>
        {community.map((c) => (
          <li key={c.name} className={styles.row}>
            <span className={styles.rowTitle}>{c.name}</span>
            <span className={styles.rowMeta}>{c.detail[lang]}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
