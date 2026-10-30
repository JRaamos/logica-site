import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Check } from "lucide-react";
import { asset } from "../../lib/utils";
import type { Company } from "../../lib/data";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "../ui/dialog";
import { Button } from "../ui/button";
export function CompanyList({
  items,
  visual = false,
}: {
  items: Company[];
  visual?: boolean;
}) {
  const [selected, setSelected] = useState<Company | null>(null);
  return (
    <>
      <div className={visual ? "project-gallery" : "company-list"}>
        {items.map((company) => (
          <button
            className={visual ? "project-entry" : "company-row"}
            key={company.id}
            onClick={() => setSelected(company)}
            aria-label={`Conhecer ${company.name}`}
          >
            {visual && (
              <span
                className={`project-preview${company.id === "ginga" ? " project-preview-mobile" : ""}`}
              >
                <img
                  src={asset(company.image)}
                  alt=""
                  width="1200"
                  height="800"
                  loading="lazy"
                />
              </span>
            )}
            <span className="company-wordmark">
              <company.icon aria-hidden="true" />
              <span>{company.name}</span>
            </span>
            <span className="company-summary">{company.description}</span>
            <span className="company-area">{company.area}</span>
            <ChevronRight className="row-chevron" aria-hidden="true" />
          </button>
        ))}
      </div>
      <Dialog
        open={!!selected}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent>
          {selected && (
            <>
              <img
                className={`detail-preview${selected.id === "ginga" ? " detail-preview-mobile" : ""}`}
                src={asset(selected.image)}
                alt={
                  selected.id === "ginga"
                    ? "Identidade visual do aplicativo Ginga"
                    : `Apresentação do projeto ${selected.name}`
                }
                width="1200"
                height="800"
              />
              <p className="detail-area">{selected.area}</p>
              <DialogTitle className="detail-title">
                {selected.name}
              </DialogTitle>
              <DialogDescription className="detail-description">
                {selected.detail}
              </DialogDescription>
              <h3 className="detail-subtitle">Especialidades</h3>
              <ul className="solution-list">
                {selected.solutions.map((solution) => (
                  <li key={solution}>
                    <Check />
                    {solution}
                  </li>
                ))}
              </ul>
              <div className="audience">
                <h3>Para quem</h3>
                <p>{selected.audience}</p>
              </div>
              <div className="dialog-actions">
                <DialogClose asChild>
                  <Button variant="outline">Fechar detalhes</Button>
                </DialogClose>
                <Button asChild>
                  <Link to={`/contato?assunto=solucoes&empresa=${selected.id}`}>
                    Conversar sobre a solução
                    <ArrowRight />
                  </Link>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
