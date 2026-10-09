import { marked } from "marked";
import type { Lang } from "../i18n";

export type Post = {
  slug: string;
  title: string;
  date: string; // AAAA-MM-DD
  summary: string;
  category: string;
  lang: Lang;
  readingMinutes: number;
  html: string;
};

// Cada arquivo .md em src/content/posts vira um texto do blog.
// O nome do arquivo (sem .md) vira o endereço: /blog/nome-do-arquivo
const files = import.meta.glob("../content/posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function parseFrontmatter(raw: string) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {} as Record<string, string>, body: raw };

  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    const key = line.slice(0, i).trim();
    const value = line.slice(i + 1).trim().replace(/^["']|["']$/g, "");
    data[key] = value;
  }
  return { data, body: match[2] };
}

export const posts: Post[] = Object.entries(files)
  .map(([path, raw]) => {
    const { data, body } = parseFrontmatter(raw);
    const slug = path.split("/").pop()!.replace(/\.md$/, "");
    const words = body.trim().split(/\s+/).length;
    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "1970-01-01",
      summary: data.summary ?? "",
      category: data.category ?? "",
      lang: data.lang === "en" ? "en" : "pt",
      readingMinutes: Math.max(1, Math.round(words / 200)),
      html: marked.parse(body, { async: false }),
    } satisfies Post;
  })
  .sort((a, b) => b.date.localeCompare(a.date));

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
