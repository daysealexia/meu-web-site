import { about } from "../data/profile";
import { useI18n } from "../i18n";
import { Section } from "../components/Section";
import styles from "./Sections.module.css";

export function About() {
  const { lang, t } = useI18n();

  return (
    <Section id="sobre" number="01" title={t.sections.about}>
      <div className={styles.prose}>
        {about.paragraphs.map((p) => (
          <p key={p.pt}>{p[lang]}</p>
        ))}
      </div>

      <h3 className={styles.subTitle}>{t.education}</h3>
      <ul className={styles.rows}>
        {about.education.map((e) => (
          <li key={e.school} className={styles.row}>
            <span className={styles.rowTitle}>{e.course[lang]}</span>
            <span className={styles.rowMeta}>
              {e.school} · {e.period}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
