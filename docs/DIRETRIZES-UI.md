# Diretrizes de UI — Softlav

> Arquivo único, válido para qualquer projeto.
>
> - **Projeto novo:** gerar seguindo este arquivo junto com o `.md` do projeto.
> - **Projeto existente:** aplicar este arquivo ao código atual seguindo a seção 9. Mudar só a camada visual, os textos de interface e os dados de exemplo. Regras de negócio, rotas e dados reais não mudam.
> - Antes de entregar, conferir todas as telas com o checklist da seção 10.

---

## 1. Stack de interface

| Função      | Usar                                                                           |
| ----------- | ------------------------------------------------------------------------------ |
| Componentes | **shadcn/ui** (Radix UI) em `components/ui`                                    |
| Estilo      | Tailwind CSS + variáveis CSS do tema                                           |
| Ícones      | **lucide-react**                                                               |
| Gráficos    | Recharts (componentes `chart` do shadcn)                                       |
| Tabelas     | TanStack Table (padrão `data-table` do shadcn)                                 |
| Formulários | react-hook-form + zod (`form` do shadcn)                                       |
| Datas       | `calendar` + `popover` do shadcn (react-day-picker), date-fns com locale pt-BR |
| Avisos      | `sonner`                                                                       |

- Não instalar outra biblioteca de componentes. Não criar um componente que já existe no shadcn/ui.
- Componentes compostos do produto ficam em `components/app` (seção 4) e são reutilizados em todas as telas.
- Projeto sem React: aplicar as mesmas regras com variáveis CSS equivalentes e componentes com o mesmo comportamento.

---

## 2. Identidade do projeto

A identidade (logo, cores da marca, fonte, tom de voz e estilo visual) já está definida no projeto.

**Preservar:** logo, cor primária, fonte, tom de voz e a assinatura visual (ex.: menu escuro, cantos mais ou menos arredondados, uso de imagens). Não substituir por valores deste arquivo.

**Completar:** o que a identidade não define, derivado dela, como variáveis CSS do tema:

| Variável                                                         | Regra                                                                                                                                             |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--primary`                                                      | Cor da marca. Só em botão primário, item ativo, links, foco (`--ring`) e seleção. Nunca em dado nem status.                                       |
| `--background`, `--card`, `--muted`, `--border`, `--input`       | Neutros levemente tingidos pela cor da marca. Página um tom abaixo dos cartões.                                                                   |
| `--foreground`, `--muted-foreground`                             | Texto principal e de apoio, ambos com contraste ≥ 4,5:1 sobre `--background` e `--card`.                                                          |
| `--chart-1` a `--chart-4`                                        | Paleta de dados: 4 matizes bem separados entre si e diferentes da cor da marca; contraste ≥ 3:1 sobre o fundo do cartão.                          |
| `--success`, `--info`, `--warning`, `--destructive`, `--neutral` | Cores de status, cada uma com fundo claro (`-bg`) e texto escuro (`-fg`) com contraste ≥ 4,5:1. `--destructive` também é a cor de alerta crítico. |
| `--radius`                                                       | O raio da identidade. Controles usam `--radius`; cartões, tabelas e modais `--radius + 4px`; pílula só em contadores. Nenhum outro raio.          |
| Fonte                                                            | A da identidade para toda a interface. Fonte de exibição (serif, decorativa) só em login e site institucional.                                    |

Mapa de status: classificar cada status do produto em sucesso, info, alerta, crítico ou neutro, e usar sempre a mesma cor para o mesmo status.

---

## 3. Escala fixa (igual em todos os projetos)

**Tipografia** — só estes 8 estilos:

| Estilo             | Tamanho / linha | Peso                           | Uso                           |
| ------------------ | --------------- | ------------------------------ | ----------------------------- |
| Título de página   | 28 / 36         | Bold, tracking −2%             | Um por tela                   |
| Número de destaque | 28 / 36         | SemiBold, algarismos tabulares | Indicadores                   |
| Título de seção    | 16 / 24         | SemiBold                       | Título de cartão              |
| Corpo              | 14 / 20         | Regular                        | Texto padrão, células         |
| Corpo destaque     | 14 / 20         | Medium                         | Nome principal da linha       |
| Rótulo             | 13 / 18         | Medium                         | Rótulos, legendas, subtítulos |
| Apoio              | 12 / 16         | Regular                        | Metadados, ajuda              |
| Sobretítulo        | 11 / 16         | SemiBold, caixa-alta, +6%      | Só nos grupos do menu lateral |

- Nada abaixo de 12px. Valores em dinheiro: "R$" e centavos a ~60% do tamanho e da opacidade.

**Espaço e medidas**

- Escala de 4px (Tailwind padrão). Gap entre cartões 24px (`gap-6`); padding de cartão 24px (`p-6`).
- Menu lateral 240–256px, altura total, fixo. Cabeçalho 64px. Margem do conteúdo 32–40px; conteúdo usa a largura disponível.
- Botões e campos 40px de altura (36px em barras compactas). Linha de tabela 56–64px. Área clicável ≥ 32px.
- Sombra só no que flutua (dropdown, modal, sheet, tooltip, barra fixa). Cartões com borda, sem sombra. Sem gradientes decorativos.

**Ícones**

- lucide-react, 16px em controles e tabelas, 20px no menu e no cabeçalho, `strokeWidth={1.5}`.
- Sem `ArrowUpRight` (↗) em navegação interna. `ChevronRight` em itens clicáveis de lista.

---

## 4. Kit de componentes do produto (`components/app`)

Criar uma vez por projeto, sobre o shadcn/ui, e usar em todas as telas.

| Componente        | Especificação                                                                                                                                                                                                                                                                                             |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AppShell`        | `sidebar` do shadcn + cabeçalho (busca global com ícone à esquerda; notificações e usuário à direita). Menu agrupado com `SidebarGroupLabel` (Sobretítulo), 24–32px entre grupos. Item ativo com fundo da marca em tom claro. Rodapé: usuário e sair.                                                     |
| `PageHeader`      | Breadcrumb (só do 2º nível em diante) · título (Título de página) · subtítulo de uma linha · ações à direita, alinhadas ao título: no máximo 1 primária + 1 secundária.                                                                                                                                   |
| `KpiCard`         | `card` com rótulo (Rótulo) e ícone em quadrado de 36px (fundo da marca em tom claro) na mesma linha; valor (Número de destaque); uma linha de contexto ou um `StatusBadge`. Todos da linha com a mesma altura. Cor só no valor crítico.                                                                   |
| `StatusBadge`     | `badge` com tom (sucesso, info, alerta, crítico, neutro), raio 6px, altura 24, texto 12 Medium, ponto de 6px opcional. Só para status.                                                                                                                                                                    |
| `EmptyState`      | Ícone de 24px num quadrado suave + frase do que acontece + botão da ação que resolve.                                                                                                                                                                                                                     |
| `DataTable`       | Barra superior: `tabs` com contagem, busca com ícone, ordenação. Tabela: 1ª coluna = nome reconhecível (com código e local como apoio), números à direita, cabeçalho em caixa de frase, linha clicável, `dropdown-menu` ⋯ no fim da linha. Rodapé: "Mostrando 1 a 10 de 14" + paginação (10 a 25 linhas). |
| `ChartCard`       | `card` com título, legenda e totais no topo à esquerda, gráfico Recharts com `--chart-*`, escala de valores redondos, valores sobre as barras (até ~8 barras), tooltip, período em andamento destacado. Sem dados → `EmptyState`.                                                                         |
| `FormSection`     | Bloco de formulário com título, frase de contexto e grade de 12 colunas.                                                                                                                                                                                                                                  |
| `StickyActionBar` | Barra fixa no rodapé com texto de apoio à esquerda e Cancelar + ação primária à direita.                                                                                                                                                                                                                  |
| `MoneyInput`      | `input` com prefixo "R$" fixo, valor alinhado à direita, máscara pt-BR.                                                                                                                                                                                                                                   |
| `DateField`       | `popover` + `calendar`, formato dd/mm/aaaa. Nunca o `input type="date"` nativo.                                                                                                                                                                                                                           |
| `FileDrop`        | Área tracejada "Arraste ou selecione um arquivo", tipos e tamanho aceitos. Nunca o `input type="file"` visível.                                                                                                                                                                                           |

---

## 5. Regras de uso

**Página**

- Título = nome do item do menu. Nunca frase de marketing.
- Sem sobretítulo em caixa-alta acima de títulos de página ou de cartão.
- A ação primária aparece uma vez na tela, com a mesma cor em todo o produto.

**Indicadores e gráficos**

- 3 a 5 `KpiCard` por linha. Zero vem com contexto ("Nenhum pagamento confirmado em outubro."); sem zero à esquerda.
- Até 4 séries por gráfico, na ordem `--chart-1` a `--chart-4`. Vermelho só para alerta.
- Nenhum gráfico ou painel desenhado só com zeros: usar `EmptyState`.
- Sem minigráficos, mapas ou ilustrações decorativas.

**Tabelas**

- Sem botões de texto repetidos em cada linha ("Abrir", "Ver ficha", "Editar"): linha clicável + menu ⋯.
- Categoria (tipo, origem, plano) em texto simples; badge só para status.
- Coluna em que todas as linhas têm o mesmo status: remover e transformar em filtro.

**Formulários** — formato pelo número de campos:

| Campos                   | Componente                                                                       |
| ------------------------ | -------------------------------------------------------------------------------- |
| Até 6                    | `dialog` (560–640px)                                                             |
| 7 a 14                   | `sheet` à direita (480–560px)                                                    |
| 15 ou mais, ou em etapas | Página própria com `FormSection` numeradas, índice de etapas e `StickyActionBar` |

- Largura dos campos pelo conteúdo na grade de 12 colunas (UF e número: 2–3; nome e endereço: 6–8; descrição: 12).
- Rótulo acima; obrigatório com * e legenda "* obrigatório" no topo; placeholder com exemplo, nunca repetindo o rótulo; erro abaixo do campo dizendo como corrigir.
- Cancelar + ação primária lado a lado, à direita. Nunca empilhados, nunca sem Cancelar.
- Endereço começa pelo CEP e preenche o resto. Coordenadas nunca são digitadas.
- Múltipla escolha: chips selecionáveis (até ~10 opções) ou `command` com busca. Nunca `select multiple` nativo.

**Texto da interface**

- Português do Brasil, caixa de frase em títulos, botões e menus.
- Botão = verbo + objeto ("Salvar cadastro"); sem "→" no texto; o verbo se repete na confirmação ("Cadastro salvo").
- Plural correto ("1 ordem"); nunca "(s)".
- Sem jargão técnico, nome de fuso, "na página atual" ou explicação de funcionamento interno. Sem glossário de status no subtítulo (usar tooltip no status).
- Sem frases de efeito em telas de trabalho (títulos, rodapé do menu, cabeçalhos de cartão).
- Estado vazio e erro dizem o que aconteceu e o que fazer.

**Dados de exemplo**

- Realistas e coerentes com o segmento e a região do projeto: 8 a 14 linhas por lista, 3 a 6 meses por gráfico, alguns alertas.
- Nunca IDs gerados, timestamps, "teste", "(demo)" ou registros de uma letra. Ambiente de demonstração indicado por um único aviso discreto no cabeçalho.

**Acessibilidade**

- Contraste de texto ≥ 4,5:1; elementos gráficos ≥ 3:1. Cor nunca é a única pista.
- Foco visível (`--ring`). Botões só com ícone têm `aria-label`. Botão desabilitado continua legível.
- Nenhum texto, badge ou placeholder cortado.

---

## 6. Padrões por tipo de tela

| Tela                  | Padrão                                                                                                                                                                                                                                                                        |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Login                 | Duas colunas: identidade (imagem ou cor da marca + frase curta) e formulário de até 400px com e-mail, senha com mostrar, "Esqueci minha senha" e botão de largura total.                                                                                                      |
| Painel inicial        | `PageHeader` com saudação e resumo do dia + seletor de período. Linha de `KpiCard`. Linha 8+4: `ChartCard` + "Precisa de atenção" (ordenado por urgência, número + título + descrição + chevron). Linha 8+4: tabela recente + lista curta com prazos relativos ("em 4 dias"). |
| Lista                 | `PageHeader` com "Adicionar …". Opcional: cartão de resumo com barra de distribuição por status. `DataTable`.                                                                                                                                                                 |
| Detalhe               | Cabeçalho com nome, `StatusBadge`, dados principais e ações. `tabs` para as seções. Coluna lateral de resumo se útil.                                                                                                                                                         |
| Kanban                | Colunas iguais (280–320px) com nome, contador e total. Cartões iguais. Coluna vazia com área tracejada.                                                                                                                                                                       |
| Agenda                | Dia, semana e mês em controle segmentado; ‹ Hoje ›. Grade visível mesmo vazia; hoje destacado. Eventos com cor de status.                                                                                                                                                     |
| Feed                  | Coluna central de 640–720px com posts em `card`; coluna lateral para filtros.                                                                                                                                                                                                 |
| Conversa / assistente | Lista de conversas (320px) + conversa. Balões; usuário à direita. Campo fixo no rodapé com anexo por ícone.                                                                                                                                                                   |
| Ponto de venda        | Grade de cartões iguais com filtros em `tabs` + comanda fixa à direita com total e ação.                                                                                                                                                                                      |
| Mapa em grade         | Células iguais com número, tipo e cor de status; legenda no topo.                                                                                                                                                                                                             |
| Configurações         | Navegação secundária à esquerda; `FormSection` à direita.                                                                                                                                                                                                                     |
| Relatórios            | Filtros de período no topo; `ChartCard` com título que diz a conclusão; tabela de apoio; exportar.                                                                                                                                                                            |
| Site institucional    | Texto ≥ 16px; herói, benefícios (3–4), demonstração, dúvidas frequentes, chamada final. Sem numeração "01 /" em seções que não são sequência.                                                                                                                                 |

---

## 7. Não faça

- Sobretítulo em caixa-alta acima de títulos ("HOJE NA OPERAÇÃO", "COMECE AQUI").
- Título de página com frase de marketing.
- Frase de efeito no rodapé do menu.
- Ícone ↗ em navegação interna.
- Fundo colorido em cartão para destacar; gradientes; sombra em cartão.
- Gráficos e indicadores só com zeros.
- Botão de texto repetido em cada linha da tabela.
- Badge para categoria; todos os status com a mesma cor.
- Controles nativos do navegador visíveis (arquivo, data, múltipla escolha, checkbox sem estilo).
- Ação primária repetida na mesma tela ou com cores diferentes entre telas.
- Botões empilhados em rodapé de formulário.
- Mais de um formato para formulários do mesmo tamanho.
- Texto abaixo de 12px; texto cortado.
- Dados de teste, IDs ou "(demo)" visíveis.
- Conteúdo em coluna estreita deixando metade da tela vazia.
- Lista plana com mais de 12 itens no menu.

---

## 8. Projetos novos

1. Instalar a stack da seção 1.
2. Montar o tema (seção 2) a partir da identidade do projeto.
3. Criar o kit da seção 4.
4. Gerar as telas com o kit, as regras da seção 5 e os padrões da seção 6.
5. Rodar o checklist (seção 10).

---

## 9. Projetos existentes

1. **Levantar a identidade** já aplicada (logo, cor primária, fonte, raio, estilo do menu) e registrar no tema (seção 2). Completar o que faltar.
2. **Centralizar valores:** trocar cores, tamanhos, raios e sombras soltos pelas variáveis do tema e pela escala da seção 3.
3. **Trocar componentes:** substituir componentes próprios e controles nativos pelos do shadcn/ui e do kit da seção 4.
4. **Aplicar as regras** da seção 5 e os padrões da seção 6 em todas as telas, procurando especialmente o que está na seção 7.
5. **Refazer os dados de exemplo** conforme a seção 5.
6. **Rodar o checklist** (seção 10). Se um item falha em várias telas, corrigir no componente ou no tema, não tela a tela.

---

## 10. Checklist (cada tela)

- [ ] Identidade do projeto preservada (logo, cor primária, fonte, estilo).
- [ ] Título = nome do módulo, sem sobretítulo em caixa-alta, subtítulo de uma linha.
- [ ] Uma ação primária, alinhada ao título, na cor da marca.
- [ ] Só os 8 estilos de texto; nada abaixo de 12px.
- [ ] Cor da marca só em ação, seleção e links; dados com `--chart-*`; status com os 5 tons.
- [ ] Mesmo status = mesma cor em todas as telas; badge só para status.
- [ ] Raios derivados de `--radius`; espaços na escala de 4px; cartões sem sombra.
- [ ] Ícones lucide-react, 16 ou 20px, sem ↗ interno.
- [ ] Componentes do shadcn/ui e do kit; nenhum controle nativo visível.
- [ ] Cartões da mesma linha com a mesma altura e formato.
- [ ] Tabela: nome primeiro, números à direita, menu ⋯, paginação.
- [ ] Formulário no formato do tamanho; Cancelar + primária lado a lado.
- [ ] Estados vazios; nenhum gráfico ou indicador só com zeros.
- [ ] Caixa de frase, plural correto, sem jargão nem frases de efeito.
- [ ] Dados realistas, sem IDs, testes ou "(demo)".
- [ ] Contraste AA, foco visível, nada cortado.
