import { Compass, Network, MoveUpRight } from "lucide-react";
import { PageIntro, CallToAction, TextLink } from "../components/app/Shared";
export default function Group() {
  return (
    <>
      <PageIntro title="O grupo">
        Um portfólio de empresas de software. Diferentes especialidades, novas
        conexões.
      </PageIntro>
      <section className="group-visual container">
        <img
          src="/images/grupo-software.webp"
          alt="Equipes de tecnologia desenvolvendo soluções de software em um ambiente de colaboração"
          width="1536"
          height="640"
        />
        <div className="image-caption">
          <span>Independência para criar.</span>
          <span>Conexão para crescer.</span>
        </div>
      </section>
      <section className="section">
        <div className="container section-split reveal">
          <h2>
            Não começamos
            <br />
            do zero.
            <br />
            <span>Começamos da sua história.</span>
          </h2>
          <div className="section-copy">
            <p className="lead">
              Por trás de um bom software existe uma empresa que conhece seu
              mercado.
            </p>
            <p>
              A Logica é um grupo com um portfólio de empresas de software.
              Reunimos diferentes especialidades e preservamos a identidade, os
              talentos e o conhecimento de cada negócio.
            </p>
            <p>
              A conexão acontece onde faz sentido: na troca de experiências, no
              acesso a novas perspectivas e na construção de oportunidades em
              conjunto.
            </p>
            <TextLink to="/modelo">Conheça o nosso modelo</TextLink>
          </div>
        </div>
      </section>
      <section className="section values-section">
        <div className="container">
          <h2>O que orienta o grupo.</h2>
          <div className="principles reveal">
            <article>
              <Compass />
              <h3>Respeito à identidade</h3>
              <p>
                Cada empresa mantém sua essência e o olhar de quem conhece o
                próprio mercado.
              </p>
            </article>
            <article>
              <Network />
              <h3>Colaboração com propósito</h3>
              <p>
                Trocas concretas de conhecimento, experiências e perspectivas
                entre as equipes.
              </p>
            </article>
            <article>
              <MoveUpRight />
              <h3>Consistência no tempo</h3>
              <p>
                Decisões que consideram a trajetória do negócio e os caminhos
                que ainda podem se abrir.
              </p>
            </article>
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  );
}
