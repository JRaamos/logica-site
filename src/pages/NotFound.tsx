import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
export default function NotFound() {
  return (
    <section className="container not-found">
      <p>Erro 404</p>
      <h1>
        Este caminho
        <br />
        ainda não existe.
      </h1>
      <p>O endereço pode ter mudado. Continue pela página inicial.</p>
      <Button asChild>
        <Link to="/">
          Voltar ao início
          <ArrowRight />
        </Link>
      </Button>
    </section>
  );
}
