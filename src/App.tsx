import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { useI18n } from "./i18n";
import { Home } from "./pages/Home";
import { Blog } from "./pages/Blog";
import { Post } from "./pages/Post";
import { profile } from "./data/profile";

export function App() {
  const { pathname, hash } = useLocation();
  const { lang, t } = useI18n();

  // Rola até a seção do link (#sobre, #contato...) ou volta ao topo ao trocar de página
  useEffect(() => {
    const target = hash ? document.getElementById(hash.slice(1)) : null;
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);

  // Título da aba na página inicial
  useEffect(() => {
    if (pathname === "/") document.title = `${profile.name} — ${profile.title[lang]}`;
  }, [pathname, lang]);

  return (
    <div className="container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Post />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} {profile.name} · {t.footer}
      </footer>
    </div>
  );
}
