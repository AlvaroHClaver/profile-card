import type { Language } from "../../i18n";
import { LanguageSwitch } from "../LanguageSwitch";

type HeaderProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
  labels: Record<Language, string>;
};

export const Header = ({
  language,
  onLanguageChange,
  labels,
}: HeaderProps) => {
  return (
    <header className="w-full bg-header-bg h-32 rounded-tl-2xl rounded-tr-2xl flex justify-end p-2.5">
      <LanguageSwitch
        language={language}
        onLanguageChange={onLanguageChange}
        labels={labels}
      />
    </header>
  );
};
