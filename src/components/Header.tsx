import { Link, NavLink } from "react-router-dom";
import { useI18n, type Lang } from "../i18n";
import { useTheme } from "../lib/theme";
import { MoonIcon, SunIcon } from "./Icons";
import styles from "./Header.module.css";

const langs: Lang[] = ["pt", "en"];

export function Header() {
  const { lang, setLang, t } = useI18n();
  const { theme, toggle } = useTheme();

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo} aria-label={t.nav.home}>
        D<span>A</span>
      </Link>

      <nav className={styles.nav}>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
        >
          {t.nav.blog}
        </NavLink>

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
      </nav>
    </header>
  );
}
