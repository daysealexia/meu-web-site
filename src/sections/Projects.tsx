import { projects } from "../data/profile";
import { useI18n } from "../i18n";
import { Section } from "../components/Section";
import { ArrowIcon } from "../components/Icons";
import styles from "./Sections.module.css";

export function Projects() {
  const { lang, t } = useI18n();
  if (projects.length === 0) return null;

  return (
    <Section id="projetos" number="03" title={t.sections.projects}>
      <ul className={styles.cards}>
        {projects.map((p) => (
          <li key={p.name} className={styles.card}>
            <p className={styles.period}>{p.kind[lang]}</p>
            <h3 className={styles.cardTitle}>{p.name}</h3>
            <p className={styles.cardText}>{p.description[lang]}</p>
            <ul className={styles.tags}>
              {p.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            {(p.code || p.demo) && (
              <p className={styles.cardLinks}>
                {p.code && (
                  <a href={p.code} target="_blank" rel="noreferrer">
                    {t.code} <ArrowIcon width={14} height={14} />
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer">
                    {t.demo} <ArrowIcon width={14} height={14} />
                  </a>
                )}
              </p>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
