export type Language = "pt" | "en";

export const translations = {
  pt: {
    name: "Seu Nome",
    role: "Desenvolvedor Web",
    about:
      "Criando experiências digitais incríveis com código limpo e design intuitivo. Apaixonado por tecnologia e inovação.",
    location: "São Paulo, Brasil",
    contactButton: "Entre em Contato",
    languageLabels: {
      pt: "Português",
      en: "Inglês",
    },
  },
  en: {
    name: "Your Name",
    role: "Web Developer",
    about:
      "Creating amazing digital experiences with clean code and intuitive design. Passionate about technology and innovation.",
    location: "São Paulo, Brazil",
    contactButton: "Get in Touch",
    languageLabels: {
      pt: "Portuguese",
      en: "English",
    },
  },
} satisfies Record<
  Language,
  {
    name: string;
    role: string;
    about: string;
    location: string;
    contactButton: string;
    languageLabels: Record<Language, string>;
  }
>;
