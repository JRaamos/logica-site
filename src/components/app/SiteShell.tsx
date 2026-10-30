import { useEffect, useRef, useState, type PropsWithChildren } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowRight, Menu, ArrowUp } from "lucide-react";
import { Button } from "../ui/button";
import { asset } from "../../lib/utils";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
const navigation = [
  ["/grupo", "O grupo"],
  ["/empresas", "Nosso portfólio"],
  ["/modelo", "Como crescemos"],
];
export function SiteShell({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const main = useRef<HTMLElement>(null);
  const initial = useRef(true);
  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
    if (initial.current) {
      initial.current = false;
    } else main.current?.focus({ preventScroll: true });
  }, [location.pathname]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    const seen = new WeakSet<Element>();
    const scan = () =>
      document.querySelectorAll(".reveal").forEach((el) => {
        if (!seen.has(el)) {
          seen.add(el);
          observer.observe(el);
        }
      });
    scan();
    const mutations = new MutationObserver(scan);
    if (main.current)
      mutations.observe(main.current, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, [location.pathname]);
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" to="/" aria-label="Logica — página inicial">
            <img
              src={asset("brand/logo.svg")}
              alt="Logica"
              width="150"
              height="37"
            />
          </Link>
          <nav className="desktop-nav" aria-label="Navegação principal">
            {navigation.map(([path, label]) => (
              <NavLink key={path} to={path}>
                {label}
              </NavLink>
            ))}
          </nav>
          <Button asChild variant="outline" className="header-contact">
            <Link to="/contato">
              Vamos conversar
              <ArrowRight />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="mobile-menu"
            aria-label="Abrir menu"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </Button>
        </div>
      </header>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="mobile-nav-dialog">
          <DialogTitle className="mobile-nav-title">
            Explore a Logica
          </DialogTitle>
          <DialogDescription className="sr-only">
            Escolha uma página do site
          </DialogDescription>
          <nav aria-label="Navegação móvel">
            {navigation.map(([path, label]) => (
              <Link key={path} to={path} onClick={() => setOpen(false)}>
                {label}
                <ArrowRight />
              </Link>
            ))}
            <Link to="/contato" onClick={() => setOpen(false)}>
              Vamos conversar
              <ArrowRight />
            </Link>
          </nav>
        </DialogContent>
      </Dialog>
      <main id="conteudo" ref={main} tabIndex={-1}>
        {children}
      </main>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-identity">
              <Link to="/" aria-label="Logica — início">
                <img
                  src={asset("brand/logo-light.svg")}
                  alt="Logica"
                  width="160"
                  height="40"
                  loading="lazy"
                />
              </Link>
              <p>Software. Conexões. Futuro.</p>
            </div>
            <div>
              <h2>Explore</h2>
              {navigation.map(([path, label]) => (
                <Link key={path} to={path}>
                  {label}
                </Link>
              ))}
            </div>
            <div>
              <h2>Conecte-se</h2>
              <Link to="/contato?assunto=grupo">Faça parte do grupo</Link>
              <Link to="/contato?assunto=solucoes">Encontre uma solução</Link>
              <Link to="/contato?assunto=parcerias">Construa uma parceria</Link>
            </div>
            <div className="footer-signature" aria-hidden="true">
              <span className="brand-mark" />
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Logica</p>
            <Link to="/privacidade">Privacidade</Link>
            <a href="#conteudo">
              Voltar ao topo
              <ArrowUp />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
