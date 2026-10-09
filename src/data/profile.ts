// Todo o conteúdo do cartão fica aqui — edite este arquivo para atualizar o site.

export type Localized = { pt: string; en: string };

export type Site = {
  name: string;
  url: string;
  description: Localized;
};

export const profile = {
  name: "Dayse Alexia",
  title: {
    pt: "Frontend Developer em formação",
    en: "Frontend Developer in training",
  },
  bio: {
    pt: "Frontend Developer em formação, com base em engenharia, visão de produto e obsessão por evolução constante.",
    en: "Frontend Developer in training, with an engineering background, a product mindset and an obsession with constant growth.",
  },
  photo: "/foto.jpg",
  cv: "/Dayse_Alexia_CV_PT.pdf",
  email: "daysealexiacb@gmail.com",
  social: {
    linkedin: "https://linkedin.com/in/daysealexia",
    github: "https://github.com/daysealexia",
  },
};

// Outros sites e projetos que você for construindo.
// A seção "Outros projetos" só aparece quando houver ao menos um item.
export const sites: Site[] = [
  // {
  //   name: "Portfólio",
  //   url: "https://meu-portfolio.vercel.app",
  //   description: { pt: "Meus projetos de frontend", en: "My frontend projects" },
  // },
];
