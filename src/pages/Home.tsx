import { Link } from "react-router-dom";
import { profile, sites } from "../data/profile";
import { formatDate, useI18n } from "../i18n";
import { posts } from "../lib/posts";
import { ArrowIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "../components/Icons";
import styles from "./Home.module.css";

export function Home() {
  const { lang, t } = useI18n();
  const [firstName, ...rest] = profile.name.split(" ");
  const latest = posts.slice(0, 3);

  const socials = [
    { label: "LinkedIn", href: profile.social.linkedin, Icon: LinkedInIcon },
    { label: "GitHub", href: profile.social.github, Icon: GitHubIcon },
    { label: "E-mail", href: `mailto:${profile.email}`, Icon: MailIcon },
  ];

  return (
    <>
      <section className={styles.card}>
        <div className={styles.photoFrame}>
          <img
            className={styles.photo}
            src={profile.photo}
            alt={t.photoAlt}
            width={393}
            height={873}
          />
        </div>

        <div className={styles.info}>
          <p className={styles.eyebrow}>{profile.title[lang]}</p>
          <h1 className={styles.name}>
            {firstName} <em>{rest.join(" ")}</em>
          </h1>
          <p className={styles.bio}>{profile.bio[lang]}</p>

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

          <a className={styles.email} href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>
      </section>

      {sites.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.elsewhere}</h2>
          <ul className={styles.list}>
            {sites.map((site) => (
              <li key={site.url}>
                <a className={styles.row} href={site.url} target="_blank" rel="noreferrer">
                  <span className={styles.rowTitle}>{site.name}</span>
                  <span className={styles.rowMeta}>{site.description[lang]}</span>
                  <ArrowIcon className={styles.rowArrow} />
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {latest.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.latestPosts}</h2>
          <ul className={styles.list}>
            {latest.map((post) => (
              <li key={post.slug}>
                <Link className={styles.row} to={`/blog/${post.slug}`}>
                  <span className={styles.rowTitle}>{post.title}</span>
                  <span className={styles.rowMeta}>{formatDate(post.date, lang)}</span>
                  <ArrowIcon className={styles.rowArrow} />
                </Link>
              </li>
            ))}
          </ul>
          <Link className={styles.more} to="/blog">
            {t.allPosts} →
          </Link>
        </section>
      )}
    </>
  );
}
