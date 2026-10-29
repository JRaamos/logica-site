import {
  Workflow,
  ChartNoAxesCombined,
  PanelsTopLeft,
  ShieldCheck,
  Cloud,
  MessagesSquare,
} from "lucide-react";
export const companies = [
  {
    id: "flow",
    name: "Flow",
    area: "Operações",
    category: "operacoes",
    icon: Workflow,
    description: "Mais fluidez em cada etapa da operação.",
    detail:
      "Automação para aproximar pessoas, processos e sistemas. Uma proposta para reduzir tarefas manuais e dar mais visibilidade ao trabalho.",
    solutions: [
      "Automação de processos",
      "Integração de sistemas",
      "Gestão de fluxos de trabalho",
    ],
    audience: "Equipes de operações, serviços e atendimento.",
  },
  {
    id: "atlas",
    name: "Atlas",
    area: "Dados e inteligência",
    category: "dados",
    icon: ChartNoAxesCombined,
    description: "Informação que ajuda a encontrar direção.",
    detail:
      "Dados organizados e análises acessíveis para quem decide. Uma proposta para conectar fontes de informação e transformar indicadores em uma visão mais clara do negócio.",
    solutions: [
      "Inteligência de negócios",
      "Plataformas de dados",
      "Análises e indicadores",
    ],
    audience: "Lideranças e equipes de planejamento, dados e finanças.",
  },
  {
    id: "core",
    name: "Core",
    area: "Gestão empresarial",
    category: "gestao",
    icon: PanelsTopLeft,
    description: "O negócio inteiro, mais conectado.",
    detail:
      "Uma visão integrada da gestão, do financeiro à operação. Uma proposta de software para organizar rotinas e acompanhar a evolução de cada negócio.",
    solutions: [
      "Gestão empresarial",
      "Controle financeiro",
      "Gestão de serviços",
    ],
    audience:
      "Empresas que buscam organizar processos e preparar sua expansão.",
  },
  {
    id: "prisma",
    name: "Prisma",
    area: "Segurança digital",
    category: "infraestrutura",
    icon: ShieldCheck,
    description: "Confiança em cada conexão.",
    detail:
      "Proteção e continuidade para ambientes digitais. Uma proposta que reúne gestão de acessos e visibilidade de riscos para apoiar equipes de tecnologia.",
    solutions: [
      "Proteção de ambientes",
      "Gestão de identidades",
      "Visibilidade de riscos",
    ],
    audience: "Equipes de tecnologia, segurança e governança.",
  },
  {
    id: "orbit",
    name: "Orbit",
    area: "Cloud e infraestrutura",
    category: "infraestrutura",
    icon: Cloud,
    description: "Uma base para o próximo passo.",
    detail:
      "Infraestrutura que acompanha a operação. Uma proposta para organizar ambientes em nuvem e apoiar a evolução consistente de produtos digitais.",
    solutions: [
      "Ambientes em nuvem",
      "Gestão de infraestrutura",
      "Modernização de aplicações",
    ],
    audience: "Empresas que desenvolvem ou operam produtos digitais.",
  },
  {
    id: "pulse",
    name: "Pulse",
    area: "Relacionamento",
    category: "gestao",
    icon: MessagesSquare,
    description: "Tecnologia que aproxima pessoas.",
    detail:
      "Interações organizadas e atendimento conectado. Uma proposta para ajudar equipes a acompanhar a jornada e construir relações mais próximas com seus clientes.",
    solutions: [
      "Gestão de relacionamento",
      "Atendimento integrado",
      "Jornadas de clientes",
    ],
    audience: "Equipes comerciais, de atendimento e de experiência do cliente.",
  },
];
export type Company = (typeof companies)[number];
export const categories = [
  { id: "todos", label: "Todas as áreas" },
  { id: "gestao", label: "Gestão" },
  { id: "operacoes", label: "Operações" },
  { id: "dados", label: "Dados" },
  { id: "infraestrutura", label: "Infraestrutura" },
];
export const subjects = [
  { value: "grupo", label: "Fazer parte do grupo" },
  { value: "solucoes", label: "Conhecer uma solução" },
  { value: "parcerias", label: "Construir uma parceria" },
  { value: "outros", label: "Outros assuntos" },
];
export const faqs = [
  [
    "O que é a Logica?",
    "A Logica é um grupo com um portfólio de empresas de software. Reunimos negócios com diferentes especialidades, preservando sua autonomia e criando conexões para compartilhar conhecimento e crescer no longo prazo.",
  ],
  [
    "As empresas mantêm sua identidade?",
    "Autonomia é um dos princípios do modelo apresentado. A ideia é preservar a cultura, a especialização e a proximidade com os clientes de cada negócio.",
  ],
  [
    "Como iniciar uma conversa sobre minha empresa?",
    "Na página de contato, selecione “Fazer parte do grupo” e conte um pouco sobre sua empresa e seus objetivos. Nesta apresentação, você pode preparar e baixar a mensagem antes de encaminhá-la por um canal verificado.",
  ],
  [
    "Como encontrar uma solução para meu negócio?",
    "Explore as empresas por área de atuação e consulte suas especialidades. Os seis perfis são exemplos de apresentação e não constituem uma oferta comercial verificada.",
  ],
];
