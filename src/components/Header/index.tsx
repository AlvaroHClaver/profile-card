import type { Language } from "../../i18n";
import { LanguageSwitch } from "../LanguageSwitch";

type HeaderProps = {
  language: Language;
  languages: Array<{
    code: Language;
    label: string;
    shortLabel?: string;
  }>;
  onLanguageChange: (language: Language) => void;
};

export const Header = ({
  language,
  languages,
  onLanguageChange,
}: HeaderProps) => {
  return (
    <header className="w-full bg-header-bg h-[var(--header-height)] rounded-t-[var(--profile-card-radius)] flex justify-end p-2.5">
      <LanguageSwitch
        language={language}
        languages={languages}
        onLanguageChange={onLanguageChange}
      />
    </header>
  );
};
