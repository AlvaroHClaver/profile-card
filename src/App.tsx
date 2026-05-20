import { useEffect, useState } from "react";
import "./App.css";
import { About } from "./components/About";
import { Avatar } from "./components/Avatar";
import { BulletList } from "./components/BulletList";
import { Header } from "./components/Header";
import { BadgeList } from "./components/Badge/BadgeList";
import { SocialBadgeList } from "./components/SocialBadge/SocialBadgeList";
import type { Language } from "./i18n";
import { profileConfig, translations } from "./i18n";
import { MailToButton } from "./components/MailToButton";
import { detailIcons, socialIcons } from "./config/icons";
import { applyTheme, themeConfig } from "./config/theme";

const getInfoItems = (language: Language) =>
  profileConfig.infoItems.map((item) => ({
    icon: detailIcons[item.icon],
    text: item.translations?.[language] ?? item.text ?? "",
  }));

const socialBadges = profileConfig.socialLinks.map((item) => ({
  icon: socialIcons[item.icon],
  label: item.label,
  link: item.url,
}));

function App() {
  const [language, setLanguage] = useState<Language>(
    profileConfig.defaultLanguage,
  );
  const t = translations[language];
  const items = getInfoItems(language);

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  useEffect(() => {
    applyTheme(themeConfig);
  }, []);

  return (
    <main className="w-(--profile-card-width-mobile) md:w-(--profile-card-width) bg-card-bg h-(--profile-card-height) rounded-(--profile-card-radius) relative text-primary-text flex flex-col items-center">
      <Header
        language={language}
        onLanguageChange={setLanguage}
        labels={t.languageLabels}
      />
      <Avatar src={profileConfig.avatar.src} alt={profileConfig.avatar.alt} />
      <About name={t.name} role={t.role} description={t.about} />
      <BulletList items={items} />
      <BadgeList items={profileConfig.techBadges} />
      <SocialBadgeList items={socialBadges} />
      <MailToButton
        email={profileConfig.contact.email}
        label={t.contactButton}
      />
    </main>
  );
}

export default App;
