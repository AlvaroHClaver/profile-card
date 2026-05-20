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
    <header className="w-full bg-header-bg h-[var(--header-height)] rounded-t-[var(--profile-card-radius)] flex justify-end p-2.5">
      <LanguageSwitch
        language={language}
        onLanguageChange={onLanguageChange}
        labels={labels}
      />
    </header>
  );
};
