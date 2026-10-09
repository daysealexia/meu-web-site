import { Link } from "react-router-dom";
import { formatDate, useI18n } from "../i18n";
import { posts } from "../lib/posts";
import { Section } from "../components/Section";
import { ArrowIcon } from "../components/Icons";
import styles from "./Sections.module.css";

export function LatestPosts() {
  const { lang, t } = useI18n();
  const latest = posts.slice(0, 3);
  if (latest.length === 0) return null;

  return (
    <Section id="textos" number="06" title={t.latestPosts}>
      <ul className={styles.rows}>
        {latest.map((post) => (
          <li key={post.slug}>
            <Link className={`${styles.row} ${styles.rowLink}`} to={`/blog/${post.slug}`}>
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
    </Section>
  );
}
