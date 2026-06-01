import { useEffect, useState } from "react";
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
    text:
      item.translations?.[language] ??
      item.translations?.[profileConfig.defaultLanguage] ??
      item.text ??
      "",
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
  const activeLanguage =
    translations[language] == null ? profileConfig.defaultLanguage : language;
  const t = translations[activeLanguage];
  const items = getInfoItems(language);
  const availableLanguages = profileConfig.languages;
  const currentLanguageConfig =
    availableLanguages.find((item) => item.code === activeLanguage) ??
    availableLanguages[0];

  useEffect(() => {
    document.documentElement.lang =
      currentLanguageConfig?.htmlLang ?? activeLanguage;
  }, [activeLanguage, currentLanguageConfig]);

  useEffect(() => {
    applyTheme(themeConfig);
  }, []);

  return (
    <main className="w-(--profile-card-width-mobile) md:w-(--profile-card-width) bg-card-bg rounded-(--profile-card-radius) relative text-primary-text flex flex-col items-center">
      <Header
        language={activeLanguage}
        languages={availableLanguages}
        onLanguageChange={setLanguage}
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
