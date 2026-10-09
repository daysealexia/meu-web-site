import { profile } from "../data/profile";
import { useI18n } from "../i18n";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";
import styles from "../sections/Hero.module.css";

// Botão do currículo + ícones sociais — usado no topo e no contato
export function Links() {
  const { t } = useI18n();

  const socials = [
    { label: "LinkedIn", href: profile.social.linkedin, Icon: LinkedInIcon },
    { label: "GitHub", href: profile.social.github, Icon: GitHubIcon },
    { label: "E-mail", href: `mailto:${profile.email}`, Icon: MailIcon },
  ];

  return (
    <div className={styles.actions}>
      <a className={styles.cvButton} href={profile.cv} download="Dayse_Alexia_CV.pdf">
        <DownloadIcon />
        {t.downloadCv}
        {t.cvNote && <span className={styles.cvNote}>{t.cvNote}</span>}
      </a>

      <ul className={styles.socials}>
        {socials.map(({ label, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              className={styles.social}
              aria-label={label}
              title={label}
              {...(href.startsWith("http") && { target: "_blank", rel: "noreferrer" })}
            >
              <Icon />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
