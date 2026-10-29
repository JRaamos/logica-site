# Publicação e entrega

## Build estático

```bash
npm ci
npm run build
```

Publique o conteúdo de `dist/`. Não publique `src/` como se fosse um site sem build. O script cria entradas para as rotas conhecidas e nomes `.html` antigos. Para caminhos desconhecidos, configure fallback da hospedagem para `index.html` ou página de erro `404.html`, conforme o provedor. O arquivo `_redirects` cobre provedores que usam essa convenção; não é universal.

Exemplo Nginx:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## Sites

O manifesto `.openai/hosting.json` identifica a apresentação no Sites. A publicação é privada para o proprietário por padrão. O acesso de outras pessoas depende da configuração explícita de compartilhamento. Um endereço de produção não implica validação comercial do conteúdo.

## Antes do lançamento comercial

Troque os perfis ilustrativos e textos por informações aprovadas da empresa. Defina um canal real de contato, revise o aviso de privacidade e valide recebimento de mensagens. Somente após essa revisão, revise a descrição dos perfis em privacidade e libere a indexação em `index.html` e `public/robots.txt`.

A implantação é estática: não inclui banco de dados, login, CRM ou serviço de e-mail. Não há dependência de conta Sites para rodar localmente ou hospedar o build em outro provedor.

## GitHub Pages

Endereço público: https://jraamos.github.io/logica-site/

Repositório: https://github.com/JRaamos/logica-site

O workflow `.github/workflows/pages.yml` executa os testes, gera o build e publica automaticamente os pushes da branch `main`. O repositório deve ter **Settings → Pages → Source: GitHub Actions** habilitado.

A variável `BASE_PATH` ajusta o build ao nome do repositório. Imagens, logos, favicon e navegação respeitam essa base. O build gera `index.html` para todas as rotas conhecidas, além de `404.html` e `.nojekyll`, para que acesso direto e recarregamento funcionem no Pages.

Para reproduzir um build em subpasta:

```bash
BASE_PATH=/logica-site/ npm run build
```

Sem essa variável, `npm run build` continua gerando o site para a raiz de qualquer hospedagem. O endereço padrão do Pages é `https://USUARIO.github.io/NOME-DO-REPOSITORIO/`; não exige compra de domínio. Um domínio próprio pode ser conectado depois.
