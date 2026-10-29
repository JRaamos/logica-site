import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageIntro, CallToAction } from "../components/app/Shared";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/ui/accordion";
import { Button } from "../components/ui/button";
const steps = [
  [
    "Conhecer a trajetória",
    "Uma conversa sobre o que foi construído.",
    "Produtos, especialidades, equipe e mercado. O primeiro passo é entender a história do negócio e o que seus fundadores querem para o futuro.",
  ],
  [
    "Encontrar possibilidades",
    "Uma análise dos caminhos em comum.",
    "Exploramos onde a conexão com o grupo pode contribuir, preservando a identidade da empresa. Cada conversa tem seu contexto e seu próprio ritmo.",
  ],
  [
    "Construir em conjunto",
    "Uma direção que faça sentido para os dois lados.",
    "Quando há alinhamento, os próximos passos são definidos em conjunto, com clareza sobre responsabilidades, expectativas e objetivos.",
  ],
];
export default function Model() {
  return (
    <>
      <PageIntro title="Como crescemos">
        Autonomia no dia a dia. Conexão para o longo prazo.
      </PageIntro>
      <section className="container model-intro">
        <h2>
          Mais do que reunir empresas,
          <br />
          <span>aproximar possibilidades.</span>
        </h2>
        <p>
          Não existe uma fórmula única. Existe a disposição para ouvir, entender
          cada negócio e construir uma direção compartilhada.
        </p>
      </section>
      <section className="container journey">
        <h2>Como começa a aproximação</h2>
        {steps.map(([title, summary, detail], index) => (
          <article className="journey-step reveal" key={title}>
            <span className="step-number">{index + 1}</span>
            <div>
              <h3>{title}</h3>
              <p className="step-summary">{summary}</p>
            </div>
            <p>{detail}</p>
          </article>
        ))}
      </section>
      <section className="section model-questions">
        <div className="container faq-grid">
          <div>
            <h2>
              Espaço para
              <br />
              perguntar.
            </h2>
            <p>O começo de uma boa conexão é uma conversa aberta.</p>
            <Button asChild variant="outline">
              <Link to="/contato?assunto=grupo">
                Apresentar minha empresa
                <ArrowRight />
              </Link>
            </Button>
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem value="autonomia">
              <AccordionTrigger>
                O que autonomia significa nesse modelo?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Respeitar a identidade e o conhecimento de cada empresa. A
                  proposta é criar conexões que ampliem possibilidades e façam
                  sentido para a sua realidade.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="perfil">
              <AccordionTrigger>
                Existe um perfil único de empresa?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  A apresentação reúne diferentes especialidades em software. O
                  alinhamento é avaliado em uma conversa sobre a trajetória, os
                  produtos e os objetivos de cada negócio.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="processo">
              <AccordionTrigger>
                O primeiro contato gera algum compromisso?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  O primeiro contato serve para iniciar uma conversa. Qualquer
                  relação comercial exige avaliação e condições acordadas entre
                  as partes.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <CallToAction />
    </>
  );
}
