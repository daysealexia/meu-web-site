import { profile } from "../data/profile";
import { useI18n } from "../i18n";
import { Links } from "../components/Links";
import styles from "./Hero.module.css";

export function Hero() {
  const { lang, t } = useI18n();
  const [firstName, ...rest] = profile.name.split(" ");

  return (
    <section className={styles.hero}>
      <div className={styles.photoFrame}>
        <img className={styles.photo} src={profile.photo} alt={t.photoAlt} width={393} height={873} />
      </div>

      <div className={styles.info}>
        <p className={styles.eyebrow}>{profile.title[lang]}</p>
        <h1 className={styles.name}>
          {firstName} <em>{rest.join(" ")}</em>
        </h1>
        <p className={styles.headline}>{profile.headline[lang]}</p>
        <p className={styles.location}>{profile.location[lang]}</p>
        <Links />
      </div>
    </section>
  );
}
