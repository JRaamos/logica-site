# Validação da entrega

Executada em 29/10/2026, localmente, em Chromium automatizado.

## Resultados

- TypeScript: passou no build.
- Build Vite de produção: passou.
- Oito testes de integração Playwright: passaram.
- Sete telas (início, grupo, empresas, modelo, contato, privacidade e 404) em 360, 390, 768 e 1440 pixels: sem transbordamento horizontal; título principal presente; imagens prioritárias carregadas; sem erro JavaScript observado.
- axe WCAG 2 A/AA e 2.1 AA: sem violações detectadas nas 28 combinações de tela/largura e na confirmação do contato com aviso de download.
- Busca por “automacao” encontra especialidade acentuada; filtros atualizam URL e combinam com busca; estado vazio e limpeza funcionam.
- Detalhes, menu móvel e FAQ respondem ao teclado. Escape fecha janelas e devolve foco ao acionador.
- Formulário mostra erros por campo, recebe assunto/empresa da URL e prepara mensagem. Download produz `mensagem-logica.txt`. Nenhum POST foi emitido no modo entregue.
- Rotas `.html` preservam parâmetros.

## Revisão visual

Capturas em `previews/`, com foco em herói, quebras de título, linhas do portfólio, formulário e página de modelo. Foto WebP local em 1536 × 1024. Movimento reduzido desliga animações e mantém o conteúdo legível.

## Limites

Verificação em navegador desktop com janelas representativas; não foi um ensaio em aparelhos físicos ou com leitor de tela. A checagem automatizada não certifica acessibilidade completa. O envio por backend não foi exercitado porque nenhum serviço de contato foi fornecido. Empresas e imagem arquitetônica são ilustrativas. A publicação privada é registrada separadamente da validação local.

## Reproduzir

```bash
npm ci
npx playwright install chromium
npm test
npm run build
```
