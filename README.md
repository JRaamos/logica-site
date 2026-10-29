# Logica — Site institucional

Site público: [jraamos.github.io/logica-site](https://jraamos.github.io/logica-site/). Código completo: [JRaamos/logica-site](https://github.com/JRaamos/logica-site).

Projeto novo em **React 19 + TypeScript + Vite**, baseado no layout e conteúdo de `logica-site-completo.zip`. Interface responsiva para apresentação da empresa, com identidade verde preservada, imagem editorial original de equipes de tecnologia, tipografia de sistema, composição editorial e animações discretas.

## Rodar o projeto

Requer Node.js 20.19+ (ou uma versão LTS compatível) e npm.

```bash
npm ci
npm run dev
```

Abra o endereço que o terminal mostrar. Para a versão de produção:

```bash
npm run build
npm run preview
```

Este projeto utiliza módulos e rotas: **não abra o index.html por duplo clique**. Use os comandos acima. A pasta `dist/` é gerada pelo build e pode ser hospedada em um servidor de arquivos estáticos.

## Páginas entregues

| Endereço         | Conteúdo                                                       |
| ---------------- | -------------------------------------------------------------- |
| `/`              | Apresentação, princípios, empresas em destaque, modelo e FAQ   |
| `/grupo`         | Visão do grupo e princípios de atuação                         |
| `/empresas`      | Seis empresas ilustrativas, filtros, busca e detalhes          |
| `/modelo`        | Modelo de crescimento e jornada de aproximação                 |
| `/contato`       | Formulário validado, preparação/cópia/download de mensagem     |
| `/privacidade`   | Funcionamento do formulário e uso dos dados nesta apresentação |
| Outros endereços | Página de caminho não encontrado                               |

As rotas antigas `grupo.html`, `empresas.html`, `modelo.html`, `contato.html`, `privacidade.html` e `index.html` redirecionam e preservam os parâmetros. Exemplos: `/empresas?segmento=dados`, `/contato?assunto=grupo`, `/contato?assunto=solucoes&empresa=atlas`.

## O que funciona

- Busca por nome, especialidade e descrição, sem diferenciar acentos ou maiúsculas.
- Filtros na URL, com estado vazio e ação para limpar.
- Detalhes acessíveis com foco contido, Escape, fechamento externo e retorno do foco.
- Navegação móvel, indicação de página ativa e link para pular ao conteúdo.
- Formulário com React Hook Form, Zod e erros associados aos campos.
- Preparação local da mensagem, cópia e download em texto.
- Integração opcional com endpoint HTTPS, tratamento de erro e prazo de 15 segundos.
- Respeito à preferência por movimento reduzido.
- Imagens, logos, estilos e fontes locais, sem dependências visuais externas em execução.
- Páginas secundárias carregadas sob demanda.

## Conteúdo de demonstração

**Flow, Atlas, Core, Prisma, Orbit e Pulse são empresas ilustrativas herdadas do material de referência.** Não foram fornecidas empresas verificadas, clientes, resultados ou dados comerciais. O aviso do topo foi retirado a pedido do usuário. A identificação dos perfis ilustrativos permanece na página de privacidade e nesta documentação. Nenhuma estatística ou depoimento foi inventado.

**O formulário não envia e-mail na configuração entregue.** Ele prepara uma mensagem no navegador e permite copiar/baixar. Não há backend de contato ou banco de dados neste escopo. A conexão opcional está documentada em `docs/FORMULARIO.md`.

## Onde editar

| Arquivo/pasta              | Responsabilidade                                    |
| -------------------------- | --------------------------------------------------- |
| `src/pages/`               | Textos e composição de cada página                  |
| `src/lib/data.ts`          | Empresas, áreas, assuntos e perguntas frequentes    |
| `src/styles.css`           | Tema, escala, responsividade e movimento            |
| `src/components/ui/`       | Primitivos no padrão shadcn/ui sobre Radix          |
| `src/components/app/`      | Componentes reutilizáveis específicos do site       |
| `public/brand/`            | Logos vetoriais originais e favicon                 |
| `public/images/`           | Imagem original otimizada em WebP                   |
| `scripts/static-pages.mjs` | Cópias de entrada para rotas em hospedagem estática |
| `.openai/hosting.json`     | Identidade e diretório de publicação no Sites       |

Não há credenciais no código. Variáveis `VITE_` são públicas e embutidas no build.

## Validação

```bash
npm run check
npm run build
npx playwright install chromium
npm test
```

O conjunto de testes cobre as sete telas em 360, 390, 768 e 1440 pixels, checagens automáticas WCAG A/AA com axe, filtros, busca sem acentos, detalhes, teclado, menu móvel, contato sem transmissão, download e rotas antigas. A automação não substitui validação com tecnologias assistivas e aparelhos físicos. Capturas ficam em `docs/previews/`.

## Publicação

Consulte `docs/PUBLICACAO.md`. O site é uma apresentação, com `noindex,nofollow` e `robots.txt` bloqueando indexação. Isso não restringe acesso. Antes de lançamento comercial, substitua os exemplos por dados verificados e defina o serviço e a política de contato.

O pacote de entrega inclui código, lockfile, recursos, documentação e build estático. `node_modules` não é necessário na entrega; `npm ci` o recria.
