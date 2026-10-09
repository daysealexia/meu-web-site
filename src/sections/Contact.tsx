import { profile } from "../data/profile";
import { useI18n } from "../i18n";
import { Section } from "../components/Section";
import { Links } from "../components/Links";
import styles from "./Sections.module.css";

export function Contact() {
  const { t } = useI18n();

  return (
    <Section id="contato" number="07" title={t.sections.contact}>
      <p className={styles.contactTitle}>{t.contactTitle}</p>
      <p className={styles.contactText}>{t.contactText}</p>
      <a className={styles.contactEmail} href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
      <Links />
    </Section>
  );
}
