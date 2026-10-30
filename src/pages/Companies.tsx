import { useSearchParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { PageIntro, EmptyState, CallToAction } from "../components/app/Shared";
import { CompanyList } from "../components/app/CompanyList";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { companies, categories } from "../lib/data";
import { normalize } from "../lib/utils";
export default function Companies() {
  const [params, setParams] = useSearchParams();
  const latestParams = useRef(params);
  useEffect(() => {
    latestParams.current = params;
  }, [params]);
  const category = params.get("segmento") || "todos";
  const query = params.get("busca") || "";
  const update = (key: string, value: string) => {
    const next = new URLSearchParams(latestParams.current);
    if (!value || value === "todos") next.delete(key);
    else next.set(key, value);
    latestParams.current = next;
    setParams(next, { replace: true });
  };
  const filtered = companies.filter(
    (company) =>
      (category === "todos" || company.category === category) &&
      normalize(
        `${company.name} ${company.description} ${company.area} ${company.solutions.join(" ")}`,
      ).includes(normalize(query)),
  );
  return (
    <>
      <PageIntro title="Nosso portfólio">
        Projetos da Logica para diferentes mercados. Explore os segmentos e
        conheça cada solução.
      </PageIntro>
      <section className="container directory">
        <div className="directory-toolbar">
          <div
            className="filter-list"
            role="group"
            aria-label="Filtrar por área"
          >
            {categories.map((item) => (
              <Button
                variant="ghost"
                key={item.id}
                aria-pressed={category === item.id}
                onClick={() => update("segmento", item.id)}
              >
                {item.label}
              </Button>
            ))}
          </div>
          <div className="search-field">
            <Search aria-hidden="true" />
            <Input
              aria-label="Buscar projetos"
              placeholder="Buscar no portfólio"
              value={query}
              onChange={(event) => update("busca", event.target.value)}
            />
            {query && (
              <Button
                size="icon"
                variant="ghost"
                aria-label="Limpar busca"
                onClick={() => update("busca", "")}
              >
                <X />
              </Button>
            )}
          </div>
        </div>
        <p className="result-count" role="status" aria-live="polite">
          {filtered.length}{" "}
          {filtered.length === 1
            ? "projeto encontrado"
            : "projetos encontrados"}
        </p>
        {filtered.length ? (
          <CompanyList items={filtered} visual />
        ) : (
          <EmptyState onReset={() => setParams({})} />
        )}
      </section>
      <CallToAction />
    </>
  );
}
