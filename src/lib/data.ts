import {
  Pill,
  HeartPulse,
  HardHat,
  Construction,
  Wrench,
  Flower2,
  Car,
  BedDouble,
  Church,
  Building2,
  Sprout,
  Gauge,
  MessagesSquare,
} from "lucide-react";
export const companies = [
  {
    id: "farmacore",
    name: "FarmaCore",
    area: "Indústria farmacêutica",
    category: "saude",
    description: "Visitação e operação farmacêutica conectadas.",
    detail:
      "Plataforma para organizar o relacionamento com profissionais de saúde, planejar visitas e acompanhar a atuação das equipes em campo. Estoque de amostras, lotes e territórios aproximam a operação da gestão.",
    solutions: [
      "Visitação e relacionamento",
      "Amostras e estoque por lote",
      "Territórios e acompanhamento comercial",
    ],
    audience: "Laboratórios, distribuidoras e equipes de visitação.",
    image: "portfolio/farmacore.jpg",
    icon: Pill,
  },
  {
    id: "ceres",
    name: "Ceres",
    area: "Gestão de clínicas",
    category: "saude",
    description: "A rotina da clínica, do agendamento ao cuidado.",
    detail:
      "Uma plataforma de gestão para conectar recepção, profissionais, pacientes e financeiro. Agenda, prontuários e acompanhamento terapêutico organizam a continuidade do atendimento.",
    solutions: [
      "Agenda e recepção",
      "Prontuários e acompanhamento",
      "Gestão financeira da clínica",
    ],
    audience: "Clínicas e equipes multidisciplinares.",
    image: "portfolio/ceres.jpg",
    icon: HeartPulse,
  },
  {
    id: "visva",
    name: "Visva",
    area: "Construção civil",
    category: "construcao",
    description: "Planejamento, campo e gestão na mesma obra.",
    detail:
      "Software para acompanhar obras e conectar quem planeja com quem executa. Reúne cronogramas, orçamentos, registros de campo e rotinas de suprimentos em um contexto compartilhado.",
    solutions: [
      "Projetos e cronogramas",
      "Orçamentos e suprimentos",
      "Diário de obra e qualidade",
    ],
    audience: "Construtoras, incorporadoras, empreiteiras e engenheiros.",
    image: "portfolio/visva.jpg",
    icon: HardHat,
  },
  {
    id: "delta",
    name: "Delta",
    area: "Locação de equipamentos",
    category: "construcao",
    description: "Do orçamento à devolução de cada equipamento.",
    detail:
      "Gestão para locadoras acompanharem disponibilidade, propostas, contratos e movimentação dos equipamentos. A operação conecta retirada, devolução, manutenção e controle financeiro.",
    solutions: [
      "Disponibilidade e reservas",
      "Contratos e locações",
      "Devoluções e manutenção",
    ],
    audience: "Locadoras de máquinas e equipamentos.",
    image: "portfolio/delta.jpg",
    icon: Construction,
  },
  {
    id: "proserve",
    name: "Proserve",
    area: "Serviços em campo",
    category: "servicos",
    description: "Escritório e equipe de campo no mesmo fluxo.",
    detail:
      "Plataforma de gestão de serviços com painel web e aplicativo para a equipe em campo. Conecta clientes, ordens de serviço, agenda e registros dos atendimentos.",
    solutions: ["Ordens de serviço", "Agenda e equipes", "Aplicativo de campo"],
    audience: "Prestadores de serviços, assistência técnica e manutenção.",
    image: "portfolio/proserve.jpg",
    icon: Wrench,
  },
  {
    id: "stella",
    name: "Stella",
    area: "Setor funerário",
    category: "servicos",
    description: "Uma visão integrada para uma operação de cuidado.",
    detail:
      "Plataforma para organizar espaços, pessoas, famílias e serviços do setor funerário. A gestão conecta unidades, concessões, cerimônias, contratos e registros financeiros.",
    solutions: [
      "Espaços e concessões",
      "Agenda de serviços e cerimônias",
      "Contratos e financeiro",
    ],
    audience:
      "Cemitérios, crematórios, funerárias e grupos com múltiplas unidades.",
    image: "portfolio/stella.jpg",
    icon: Flower2,
  },
  {
    id: "nucleoauto",
    name: "NúcleoAuto",
    area: "Gestão de oficinas",
    category: "automotivo",
    description: "Cada etapa da oficina, da entrada à entrega.",
    detail:
      "Sistema para organizar o atendimento e a execução dos serviços da oficina. Clientes, veículos, diagnósticos, orçamentos e peças acompanham a ordem de serviço até a entrega.",
    solutions: [
      "Ordens de serviço e orçamentos",
      "Clientes, veículos e agenda",
      "Estoque e financeiro",
    ],
    audience: "Oficinas mecânicas e centros automotivos.",
    image: "portfolio/nucleoauto.jpg",
    icon: Car,
  },
  {
    id: "azalea",
    name: "Azalea",
    area: "Hotelaria",
    category: "hospitalidade",
    description: "Reservas, recepção e operação do hotel conectadas.",
    detail:
      "Sistema de gestão hoteleira que aproxima a experiência do hóspede das rotinas da equipe. Reservas, mapa de ocupação, recepção, governança e contas da hospedagem compartilham a mesma operação.",
    solutions: [
      "Reservas e ocupação",
      "Recepção e governança",
      "Contas da hospedagem",
    ],
    audience: "Hotéis, pousadas e grupos de hospedagem.",
    image: "portfolio/azalea.jpg",
    icon: BedDouble,
  },
  {
    id: "eclesia",
    name: "Eclesia",
    area: "Comunidades religiosas",
    category: "comunidades",
    description: "Mais organização para estar perto das pessoas.",
    detail:
      "Plataforma para a gestão de comunidades religiosas. Conecta pessoas, famílias, grupos, cultos e voluntários à agenda, à comunicação e à administração da comunidade.",
    solutions: [
      "Membros, famílias e grupos",
      "Cultos, eventos e voluntários",
      "Finanças e comunicação",
    ],
    audience:
      "Igrejas, comunidades religiosas e organizações com múltiplas sedes.",
    image: "portfolio/eclesia.jpg",
    icon: Church,
  },
  {
    id: "propi",
    name: "Propi",
    area: "Gestão imobiliária",
    category: "imoveis",
    description: "Imóveis, contratos e financeiro no mesmo contexto.",
    detail:
      "Plataforma para administrar carteiras de imóveis e acompanhar cada endereço. Organiza proprietários, inquilinos, contratos, cobranças, repasses e solicitações de manutenção.",
    solutions: [
      "Carteira de imóveis e contratos",
      "Recebimentos e repasses",
      "Manutenções e documentos",
    ],
    audience:
      "Administradoras de imóveis, imobiliárias e gestores de carteiras.",
    image: "portfolio/propi.jpg",
    icon: Building2,
  },
  {
    id: "kinder",
    name: "Kinder",
    area: "Educação infantil",
    category: "educacao",
    description: "Escola, equipe e famílias na mesma página.",
    detail:
      "Plataforma para escolas infantis organizarem a operação e acompanharem a rotina de cada criança. Une turmas, presenças, registros do dia, comunicação com responsáveis e financeiro.",
    solutions: [
      "Turmas e rotina escolar",
      "Portal da família",
      "Recepção e gestão financeira",
    ],
    audience: "Escolas de educação infantil, creches e equipes pedagógicas.",
    image: "portfolio/kinder.jpg",
    icon: Sprout,
  },
  {
    id: "kinetrik",
    name: "Kinetrik",
    area: "Gestão de concessionárias",
    category: "automotivo",
    description: "Toda a operação da concessionária conectada.",
    detail:
      "Sistema de gestão para concessionárias e grupos automotivos. Conecta estoque de veículos, relacionamento comercial, propostas, oficina, peças e acompanhamento financeiro.",
    solutions: [
      "Estoque de veículos",
      "CRM, propostas e vendas",
      "Pós-venda, peças e financeiro",
    ],
    audience: "Concessionárias, revendas e grupos automotivos.",
    image: "portfolio/kinetrik.jpg",
    icon: Gauge,
  },
  {
    id: "ginga",
    name: "Ginga",
    area: "Conexões e experiências",
    category: "comunidades",
    description: "Pessoas, encontros e experiências em comum.",
    detail:
      "Aplicativo de conexões que aproxima perfis, conteúdo e eventos. Feed, agenda, interações e conversas ajudam as pessoas a descobrir experiências e construir novos encontros.",
    solutions: [
      "Perfis e feed de conteúdo",
      "Eventos e agenda",
      "Conexões e conversas",
    ],
    audience: "Pessoas que buscam novas conexões, eventos e experiências.",
    image: "portfolio/ginga.png",
    icon: MessagesSquare,
  },
];
export type Company = (typeof companies)[number];
export const categories = [
  { id: "todos", label: "Todos os segmentos" },
  { id: "saude", label: "Saúde" },
  { id: "construcao", label: "Construção e locação" },
  { id: "automotivo", label: "Automotivo" },
  { id: "servicos", label: "Serviços" },
  { id: "hospitalidade", label: "Hotelaria" },
  { id: "imoveis", label: "Imóveis" },
  { id: "educacao", label: "Educação" },
  { id: "comunidades", label: "Comunidades" },
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
    "Explore o portfólio por segmento e conheça as especialidades de cada projeto. Nos detalhes, você pode iniciar uma conversa com a Logica sobre a solução que faz sentido para sua operação.",
  ],
];
