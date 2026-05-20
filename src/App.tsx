import { useEffect, useState } from "react";
import { GrLocation } from "react-icons/gr";
import { FiMail } from "react-icons/fi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import "./App.css";
import { About } from "./components/About";
import { Avatar } from "./components/Avatar";
import { BulletList } from "./components/BulletList";
import { Header } from "./components/Header";
import { BadgeList } from "./components/Badge/BadgeList";
import { SocialBadgeList } from "./components/SocialBadge/SocialBadgeList";
import type { Language } from "./i18n";
import { translations } from "./i18n";

const getItems = (location: string) => [
  {
    icon: FiMail,
    text: "alvarohibide@gmail.com",
  },
  {
    icon: GrLocation,
    text: location,
  },
  {
    icon: IoBriefcaseOutline,
    text: "Netcracker do Brasil",
  },
];
const techBadges = ["React", "TypeScript", "Java", "SpringBoot"];
const socialBadges = [
  {
    icon: IoLogoGithub,
    link: "https://github.com/alvaro",
  },
  {
    icon: IoLogoLinkedin,
    link: "https://linkedin.com",
  },
];

function App() {
  const [language, setLanguage] = useState<Language>("pt");
  const t = translations[language];
  const items = getItems(t.location);

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  return (
    <main className="w-90 md:w-lg bg-card-bg h-170 rounded-2xl relative text-primary-text flex flex-col items-center">
      <Header
        language={language}
        onLanguageChange={setLanguage}
        labels={t.languageLabels}
      />
      <Avatar />
      <About name={t.name} role={t.role} description={t.about} />
      <BulletList items={items} />
      <BadgeList items={techBadges} />
      <SocialBadgeList items={socialBadges} />
    </main>
  );
}

export default App;
