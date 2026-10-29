import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowDown,
  Compass,
  Network,
  MoveUpRight,
} from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/ui/accordion";
import { CallToAction, TextLink } from "../components/app/Shared";
import { CompanyList } from "../components/app/CompanyList";
import { companies, faqs } from "../lib/data";
export default function Home() {
  return (
    <>
      <section className="hero">
        <img
          className="hero-image"
          src="/images/grupo-software.webp"
          alt="Diferentes equipes de tecnologia trabalhando com desenvolvimento e análise de software"
          width="1536"
          height="1024"
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1>
              Um grupo de
              <br />
              empresas de
              <br />
              software.
            </h1>
            <p>
              Um portfólio de especialidades, com autonomia para criar e
              conexões para crescer.
            </p>
            <Button asChild variant="light">
              <Link to="/empresas">
                Explorar nosso portfólio
                <ArrowRight />
              </Link>
            </Button>
          </div>
          <a className="hero-scroll" href="#essencia">
            <ArrowDown />
            Conheça a Logica
          </a>
          <span className="hero-caption">
            Empresas independentes. Um grupo conectado.
          </span>
        </div>
      </section>
      <section className="section essence" id="essencia">
        <div className="container">
          <div className="section-split reveal">
            <h2>
              Cada empresa tem
              <br />
              sua essência.
              <br />
              <span>Juntas, mais caminhos.</span>
            </h2>
            <div className="section-copy">
              <p className="lead">
                Um grupo que reúne empresas de software e valoriza o que cada
                uma faz de melhor.
              </p>
              <p>
                Nosso portfólio conecta negócios com diferentes especialidades.
                Preservamos sua identidade e criamos espaço para trocar
                conhecimento, aproximar talentos e crescer com direção.
              </p>
              <TextLink to="/grupo">Conheça o grupo</TextLink>
            </div>
          </div>
          <div className="principles reveal">
            <article>
              <Compass />
              <h3>Autonomia para criar</h3>
              <p>Identidade, cultura e proximidade com o próprio mercado.</p>
            </article>
            <article>
              <Network />
              <h3>Conexões para evoluir</h3>
              <p>Experiências que circulam. Possibilidades que se ampliam.</p>
            </article>
            <article>
              <MoveUpRight />
              <h3>Um olhar de longo prazo</h3>
              <p>
                Consistência para construir o próximo capítulo de cada negócio.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section portfolio">
        <div className="container">
          <div className="section-heading reveal">
            <div>
              <h2>
                Empresas especialistas.
                <br />
                <span>Um portfólio conectado.</span>
              </h2>
            </div>
            <TextLink to="/empresas">Conheça todas as empresas</TextLink>
          </div>
          <CompanyList items={companies} />
          <div className="portfolio-note">
            <span>Software para diferentes desafios.</span>
            <span>Gestão · Operações · Dados · Infraestrutura</span>
          </div>
        </div>
      </section>
      <section className="model-section">
        <div className="model-photo">
          <img
            src="/images/grupo-software.webp"
            alt="Profissionais de diferentes especialidades colaborando em produtos de software"
            width="768"
            height="800"
            loading="lazy"
          />
        </div>
        <div className="model-copy">
          <h2>
            Crescer sem deixar
            <br />
            de ser quem é.
          </h2>
          <p>
            Um modelo que combina a especialização de cada empresa com a troca e
            a visão de um grupo.
          </p>
          <div className="model-topics">
            <span>Respeito à trajetória</span>
            <span>Conhecimento compartilhado</span>
            <span>Construção de longo prazo</span>
          </div>
          <TextLink to="/modelo">Entenda como crescemos</TextLink>
        </div>
      </section>
      <section className="section faq-section">
        <div className="container faq-grid">
          <div className="reveal">
            <h2>
              Uma conversa
              <br />
              com mais clareza.
            </h2>
            <p>Algumas respostas antes do primeiro contato.</p>
          </div>
          <Accordion type="single" collapsible className="faq-list">
            {faqs.map(([question, answer], i) => (
              <AccordionItem value={String(i)} key={question}>
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>
                  <p>{answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <CallToAction />
    </>
  );
}
