import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, SearchX } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "../ui/button";
export function PageIntro({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="container page-intro">
      <nav className="breadcrumb" aria-label="Caminho da página">
        <Link to="/">Início</Link>
        <ChevronRight />
        <span aria-current="page">{title}</span>
      </nav>
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  );
}
export function TextLink({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) {
  return (
    <Link className="text-link" to={to}>
      {children}
      <ArrowRight />
    </Link>
  );
}
export function CallToAction() {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div>
          <h2>
            Seu próximo capítulo
            <br />
            pode começar aqui.
          </h2>
          <p>Conte sua história. Vamos conhecer as possibilidades.</p>
        </div>
        <Button asChild variant="outline">
          <Link to="/contato">
            Iniciar uma conversa
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
export function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="empty-state">
      <SearchX />
      <h2>Nenhuma empresa encontrada</h2>
      <p>Tente outro termo ou consulte todas as áreas.</p>
      <Button variant="outline" onClick={onReset}>
        Limpar filtros
      </Button>
    </div>
  );
}
