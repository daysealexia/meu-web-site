import { Link, NavLink } from "react-router-dom";
import { useI18n, type Lang } from "../i18n";
import { useTheme } from "../lib/theme";
import { MoonIcon, SunIcon } from "./Icons";
import styles from "./Header.module.css";

const langs: Lang[] = ["pt", "en"];

export function Header() {
  const { lang, setLang, t } = useI18n();
  const { theme, toggle } = useTheme();

  const sections = [
    { id: "sobre", label: t.nav.about },
    { id: "experiencia", label: t.nav.experience },
    { id: "projetos", label: t.nav.projects },
    { id: "contato", label: t.nav.contact },
  ];

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo} aria-label={t.nav.home}>
        D<span>A</span>
      </Link>

      <nav className={styles.nav}>
        {sections.map((s) => (
          <Link key={s.id} to={`/#${s.id}`} className={styles.link}>
            {s.label}
          </Link>
        ))}
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
        >
          {t.nav.blog}
        </NavLink>
      </nav>

      <div className={styles.controls}>
        <div className={styles.langs} role="group" aria-label={t.langLabel}>
          {langs.map((l) => (
            <button
              key={l}
              type="button"
              className={l === lang ? styles.langActive : styles.lang}
              aria-pressed={l === lang}
              onClick={() => setLang(l)}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>

        <button
          type="button"
          className={styles.iconButton}
          onClick={toggle}
          aria-label={theme === "dark" ? t.toLight : t.toDark}
          title={theme === "dark" ? t.toLight : t.toDark}
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </header>
  );
}
