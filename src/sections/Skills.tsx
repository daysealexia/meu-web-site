import { languages, skills } from "../data/profile";
import { useI18n } from "../i18n";
import { Section } from "../components/Section";
import styles from "./Sections.module.css";

export function Skills() {
  const { lang, t } = useI18n();

  return (
    <Section id="habilidades" number="04" title={t.sections.skills}>
      <dl className={styles.skills}>
        {skills.map((s) => (
          <div key={s.group.pt} className={styles.skillGroup}>
            <dt>{s.group[lang]}</dt>
            <dd>
              <ul className={styles.tags}>
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>

      <h3 className={styles.subTitle}>{t.languages}</h3>
      <ul className={styles.rows}>
        {languages.map((l) => (
          <li key={l.name.pt} className={styles.row}>
            <span className={styles.rowTitle}>{l.name[lang]}</span>
            <span className={styles.rowMeta}>{l.level[lang]}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
