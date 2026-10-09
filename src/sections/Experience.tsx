import { experience } from "../data/profile";
import { useI18n } from "../i18n";
import { Section } from "../components/Section";
import styles from "./Sections.module.css";

export function Experience() {
  const { lang, t } = useI18n();

  return (
    <Section id="experiencia" number="02" title={t.sections.experience}>
      <ol className={styles.timeline}>
        {experience.map((job) => (
          <li key={job.company} className={job.featured ? styles.jobFeatured : styles.job}>
            <p className={styles.period}>{job.period[lang]}</p>
            <h3 className={styles.jobRole}>{job.role[lang]}</h3>
            <p className={styles.jobCompany}>{job.company}</p>
            <p className={styles.jobSummary}>{job.summary[lang]}</p>
            {job.highlights.length > 0 && (
              <ul className={styles.highlights}>
                {job.highlights.map((h) => (
                  <li key={h.pt}>{h[lang]}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
