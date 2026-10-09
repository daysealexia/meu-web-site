// Todo o conteúdo do site fica aqui — edite este arquivo para atualizar.
// Textos com { pt, en } aparecem conforme o idioma escolhido.

export type Localized = { pt: string; en: string };

export const profile = {
  name: "Dayse Alexia",
  title: {
    pt: "Software Engineer · React Native & TypeScript",
    en: "Software Engineer · React Native & TypeScript",
  },
  headline: {
    pt: "Construo produtos digitais com React Native e TypeScript, unindo código bem testado, dados e visão de produto.",
    en: "I build digital products with React Native and TypeScript, bringing together well-tested code, data and product thinking.",
  },
  location: {
    pt: "Aracaju, Brasil · disponível para remoto",
    en: "Aracaju, Brazil · open to remote",
  },
  photo: "/foto.jpg",
  cv: "/Dayse_Alexia_CV_PT.pdf",
  email: "daysealexiacb@gmail.com",
  social: {
    linkedin: "https://linkedin.com/in/daysealexia",
    github: "https://github.com/daysealexia",
  },
};

export const about: { paragraphs: Localized[]; education: { course: Localized; school: string; period: string }[] } = {
  paragraphs: [
    {
      pt: "Comecei na ciência: me formei em Biotecnologia pela UFBA, onde aprendi a investigar problemas com método e curiosidade. Depois mergulhei em inovação e empreendedorismo, trabalhando com startups e entendendo como um produto nasce, é testado e ganha tração.",
      en: "I started in science: I earned a degree in Biotechnology from UFBA, where I learned to investigate problems with method and curiosity. Then I moved into innovation and entrepreneurship, working with startups and learning how a product is born, tested and gains traction.",
    },
    {
      pt: "Em 2023 entrei na engenharia de software no Zé Delivery (AB InBev), construindo funcionalidades de ponta a ponta no app. Hoje junto esses três mundos: código confiável, decisões guiadas por dados e olhar de negócio.",
      en: "In 2023 I moved into software engineering at Zé Delivery (AB InBev), building end-to-end features for the app. Today I bring these three worlds together: reliable code, data-driven decisions and a business mindset.",
    },
  ],
  education: [
    {
      course: { pt: "Tecnologia em Gestão da TI", en: "Associate degree in IT Management" },
      school: "FATEC Campinas",
      period: "2025 – 2028",
    },
    {
      course: { pt: "Bacharelado em Biotecnologia", en: "B.Sc. in Biotechnology" },
      school: "UFBA",
      period: "2013 – 2018",
    },
  ],
};

export type Experience = {
  role: Localized;
  company: string;
  period: Localized;
  summary: Localized;
  highlights: Localized[];
  featured?: boolean;
};

export const experience: Experience[] = [
  {
    featured: true,
    role: { pt: "Software Engineer (Associate → Junior)", en: "Software Engineer (Associate → Junior)" },
    company: "AB InBev · Zé Delivery",
    period: { pt: "Jul 2023 – Abr 2026", en: "Jul 2023 – Apr 2026" },
    summary: {
      pt: "Desenvolvimento do app Zé Delivery em React Native e TypeScript, junto com Produto, Design, Backend e Data.",
      en: "Built the Zé Delivery app in React Native and TypeScript, working with Product, Design, Backend and Data.",
    },
    highlights: [
      {
        pt: "Entreguei de ponta a ponta funcionalidades de Busca, Checkout, Ofertas do Dia, página de produto e recomendações, integrando APIs REST e AWS Lambda.",
        en: "Shipped end-to-end features for Search, Checkout, Daily Deals, product page and recommendations, integrating REST APIs and AWS Lambda.",
      },
      {
        pt: "Usei Split.io para testes A/B e rollout controlado, e Datadog para observabilidade em produção.",
        en: "Used Split.io for A/B tests and controlled rollouts, and Datadog for production observability.",
      },
      {
        pt: "Fortaleci a qualidade com Jest, SonarQube, LambdaTest, CI/CD no GitHub Actions, PR reviews e análises de causa raiz (RCA / 5 Whys).",
        en: "Strengthened quality with Jest, SonarQube, LambdaTest, CI/CD on GitHub Actions, PR reviews and root cause analysis (RCA / 5 Whys).",
      },
    ],
  },
  {
    role: { pt: "Inovação e empreendedorismo", en: "Innovation & entrepreneurship" },
    company: "WeBee · 2.5 Ventures · Tração Online",
    period: { pt: "Antes de 2023", en: "Before 2023" },
    summary: {
      pt: "Projetos com startups, inovação e crescimento de negócios — a base da minha visão de produto.",
      en: "Work with startups, innovation and business growth — the foundation of my product mindset.",
    },
    highlights: [],
  },
];

export type Project = {
  name: string;
  kind: Localized;
  description: Localized;
  stack: string[];
  code?: string; // link do repositório
  demo?: string; // link do site/demo
};

export const projects: Project[] = [
  {
    name: "AppSec Findings API",
    kind: { pt: "Projeto técnico", en: "Technical project" },
    description: {
      pt: "API para sincronizar e consultar findings de segurança (SAST/SCA), lidando com cerca de 20 mil registros.",
      en: "API to sync and query security findings (SAST/SCA), handling around 20,000 records.",
    },
    stack: ["TypeScript", "Express", "PostgreSQL", "Prisma", "Zod"],
  },
  {
    name: "Candidaturas assistidas por IA",
    kind: { pt: "Projeto pessoal", en: "Personal project" },
    description: {
      pt: "Fluxo que analisa descrições de vagas, identifica lacunas de habilidades e personaliza currículos e preparação para entrevistas.",
      en: "Workflow that analyzes job descriptions, spots skill gaps and tailors résumés and interview prep.",
    },
    stack: ["ChatGPT", "Claude", "Cursor", "Prompt Engineering"],
  },
];

export const skills: { group: Localized; items: string[] }[] = [
  { group: { pt: "Frontend & Mobile", en: "Frontend & Mobile" }, items: ["React Native", "React", "TypeScript", "JavaScript"] },
  { group: { pt: "Backend", en: "Backend" }, items: ["Node.js", "Express", "APIs REST", "PostgreSQL", "Prisma", "Zod"] },
  { group: { pt: "Cloud & DevOps", en: "Cloud & DevOps" }, items: ["AWS", "AWS Lambda", "Docker", "GitHub Actions", "CI/CD"] },
  {
    group: { pt: "Qualidade & Observabilidade", en: "Quality & Observability" },
    items: ["Jest", "SonarQube", "LambdaTest", "Datadog", "Split.io"],
  },
  { group: { pt: "Práticas", en: "Practices" }, items: ["Agile/Scrum", "Code Review", "RCA / 5 Whys"] },
  { group: { pt: "IA", en: "AI" }, items: ["ChatGPT", "Claude", "Cursor", "Prompt Engineering"] },
];

export const languages: { name: Localized; level: Localized }[] = [
  { name: { pt: "Português", en: "Portuguese" }, level: { pt: "Nativo", en: "Native" } },
  { name: { pt: "Inglês", en: "English" }, level: { pt: "Intermediário avançado (B2+)", en: "Upper intermediate (B2+)" } },
  { name: { pt: "Espanhol", en: "Spanish" }, level: { pt: "Intermediário (B1)", en: "Intermediate (B1)" } },
];

export const community: { name: string; detail: Localized }[] = [
  { name: "Technovation Girls", detail: { pt: "Mentoria desde 2018", en: "Mentoring since 2018" } },
  { name: "NASA Space Apps Challenge", detail: { pt: "Hackathon global da NASA", en: "NASA's global hackathon" } },
  { name: "ALLBIOTECH", detail: { pt: "Comunidade latino-americana de biotecnologia", en: "Latin American biotech community" } },
  { name: "Prêmio de Inventores — INOVA UNICAMP", detail: { pt: "Reconhecimento", en: "Award" } },
  { name: "Startup Weekend Women — Google for Startups", detail: { pt: "2º lugar", en: "2nd place" } },
];
