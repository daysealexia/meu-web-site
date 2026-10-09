import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { formatDate, useI18n } from "../i18n";
import { getPost } from "../lib/posts";
import { BackIcon } from "../components/Icons";
import styles from "./Blog.module.css";

export function Post() {
  const { slug = "" } = useParams();
  const { lang, t } = useI18n();
  const post = getPost(slug);

  useEffect(() => {
    document.title = `${post ? post.title : t.postNotFound} — Dayse Alexia`;
  }, [post, t]);

  return (
    <article className={styles.page}>
      <Link to="/blog" className={styles.back}>
        <BackIcon width={16} height={16} />
        {t.backToBlog}
      </Link>

      {!post ? (
        <p className={styles.empty}>{t.postNotFound}</p>
      ) : (
        <>
          <header className={styles.postHeader}>
            <p className={styles.meta}>
              {post.category && <span className={styles.category}>{post.category}</span>}
              <span>{formatDate(post.date, lang)}</span>
              <span>
                {post.readingMinutes} {t.minRead}
              </span>
            </p>
            <h1 className={styles.postTitle}>{post.title}</h1>
            {post.summary && <p className={styles.lede}>{post.summary}</p>}
          </header>

          <div
            className={styles.prose}
            lang={post.lang === "pt" ? "pt-BR" : "en"}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </>
      )}
    </article>
  );
}
