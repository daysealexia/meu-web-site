import { useEffect } from "react";
import { Link } from "react-router-dom";
import { formatDate, useI18n } from "../i18n";
import { posts } from "../lib/posts";
import styles from "./Blog.module.css";

export function Blog() {
  const { lang, t } = useI18n();

  useEffect(() => {
    document.title = `${t.blogTitle} — Dayse Alexia`;
  }, [t]);

  return (
    <section className={styles.page}>
      <h1 className={styles.title}>{t.blogTitle}</h1>
      <p className={styles.intro}>{t.blogIntro}</p>

      {posts.length === 0 ? (
        <p className={styles.empty}>{t.noPosts}</p>
      ) : (
        <ul className={styles.list}>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link to={`/blog/${post.slug}`} className={styles.item}>
                <p className={styles.meta}>
                  {post.category && <span className={styles.category}>{post.category}</span>}
                  <span>{formatDate(post.date, lang)}</span>
                  {post.lang !== lang && <span className={styles.langTag}>{post.lang.toUpperCase()}</span>}
                </p>
                <h2 className={styles.itemTitle}>{post.title}</h2>
                {post.summary && <p className={styles.summary}>{post.summary}</p>}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
