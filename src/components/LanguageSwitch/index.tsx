import type { Language } from "../../i18n";

const BASE = "cursor-pointer rounded-lg w-13.5 h-8";
const ACTIVE = `${BASE} bg-action`;
const OFF = BASE;

type LanguageSwitchProps = {
  language: Language;
  languages: Array<{
    code: Language;
    label: string;
    shortLabel?: string;
  }>;
  onLanguageChange: (language: Language) => void;
};

export const LanguageSwitch = ({
  language,
  languages,
  onLanguageChange,
}: LanguageSwitchProps) => {
  return (
    <div
      className="min-w-30 h-10 bg-card-bg rounded-[10px] text-primary-text flex justify-around items-center px-1 gap-1"
      aria-label="Language selector"
    >
      {languages.map((item) => (
        <button
          type="button"
          key={item.code}
          onClick={() => onLanguageChange(item.code)}
          className={language === item.code ? ACTIVE : OFF}
          aria-pressed={language === item.code}
          aria-label={item.label}
          title={item.label}
        >
          {item.shortLabel ?? item.code.toUpperCase()}
        </button>
      ))}
    </div>
  );
};
