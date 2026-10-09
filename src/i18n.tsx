import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "pt" | "en";

const pt = {
  nav: { home: "Início", about: "Sobre", experience: "Experiência", projects: "Projetos", contact: "Contato", blog: "Blog" },
  sections: {
    about: "Sobre",
    experience: "Experiência",
    projects: "Projetos",
    skills: "Habilidades",
    community: "Comunidade",
    contact: "Contato",
  },
  education: "Formação",
  languages: "Idiomas",
  code: "Código",
  demo: "Demo",
  contactTitle: "Vamos conversar?",
  contactText: "Estou aberta a oportunidades remotas, colaborações e boas conversas sobre produto e tecnologia.",
  downloadCv: "Baixar currículo",
  cvNote: "",
  latestPosts: "Textos recentes",
  allPosts: "Ver todos os textos",
  blogTitle: "Blog",
  blogIntro: "Crônicas e colunas sobre negócios e tecnologia.",
  noPosts: "Nenhum texto publicado ainda.",
  backToBlog: "Todos os textos",
  minRead: "min de leitura",
  postNotFound: "Texto não encontrado.",
  toLight: "Ativar tema claro",
  toDark: "Ativar tema escuro",
  langLabel: "Idioma",
  photoAlt: "Foto de Dayse Alexia",
  footer: "Feito com café e curiosidade.",
};

type Dict = typeof pt;

const en: Dict = {
  nav: { home: "Home", about: "About", experience: "Experience", projects: "Projects", contact: "Contact", blog: "Blog" },
  sections: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    community: "Community",
    contact: "Contact",
  },
  education: "Education",
  languages: "Languages",
  code: "Code",
  demo: "Demo",
  contactTitle: "Let's talk?",
  contactText: "I'm open to remote opportunities, collaborations and good conversations about product and technology.",
  downloadCv: "Download résumé",
  cvNote: "(in Portuguese)",
  latestPosts: "Recent writing",
  allPosts: "See all posts",
  blogTitle: "Blog",
  blogIntro: "Essays and columns on business and technology.",
  noPosts: "No posts published yet.",
  backToBlog: "All posts",
  minRead: "min read",
  postNotFound: "Post not found.",
  toLight: "Switch to light theme",
  toDark: "Switch to dark theme",
  langLabel: "Language",
  photoAlt: "Photo of Dayse Alexia",
  footer: "Made with coffee and curiosity.",
};

const dictionaries: Record<Lang, Dict> = { pt, en };

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "pt" || saved === "en") return saved;
  } catch {
    // localStorage indisponível (ex.: navegação privada)
  }
  return navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en";
}

type I18n = { lang: Lang; setLang: (lang: Lang) => void; t: Dict };

const I18nContext = createContext<I18n | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    try {
      localStorage.setItem("lang", lang);
    } catch {
      // ignora
    }
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n precisa estar dentro de <I18nProvider>");
  return ctx;
}

export function formatDate(date: string, lang: Lang) {
  return new Intl.DateTimeFormat(lang === "pt" ? "pt-BR" : "en-US", {
    dateStyle: "long",
  }).format(new Date(`${date}T12:00:00`));
}
