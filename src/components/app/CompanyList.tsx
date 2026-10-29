import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Check } from "lucide-react";
import type { Company } from "../../lib/data";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "../ui/dialog";
import { Button } from "../ui/button";
export function CompanyList({ items }: { items: Company[] }) {
  const [selected, setSelected] = useState<Company | null>(null);
  return (
    <>
      <div className="company-list">
        {items.map((company) => (
          <button
            className="company-row"
            key={company.id}
            onClick={() => setSelected(company)}
            aria-label={`Conhecer Logica ${company.name}`}
          >
            <span className="company-wordmark">
              <company.icon aria-hidden="true" />
              <span>{company.name.toLowerCase()}</span>
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
              <selected.icon className="detail-icon" aria-hidden="true" />
              <p className="detail-area">{selected.area}</p>
              <DialogTitle className="detail-title">
                Logica {selected.name}
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
