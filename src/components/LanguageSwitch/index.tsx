import type { Language } from "../../i18n";

const BASE = "cursor-pointer rounded-lg w-13.5 h-8";
const ACTIVE = `${BASE} bg-action`;
const OFF = BASE;

type LanguageSwitchProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
  labels: Record<Language, string>;
};

export const LanguageSwitch = ({
  language,
  onLanguageChange,
  labels,
}: LanguageSwitchProps) => {
  return (
    <div
      className="w-30 h-10 bg-card-bg rounded-[10px] text-primary-text flex justify-around items-center"
      aria-label="Language selector"
    >
      <button
        type="button"
        onClick={() => onLanguageChange("pt")}
        className={language === "pt" ? ACTIVE : OFF}
        aria-pressed={language === "pt"}
        aria-label={labels.pt}
      >
        🇧🇷 PT
      </button>

      <button
        type="button"
        onClick={() => onLanguageChange("en")}
        className={language === "en" ? ACTIVE : OFF}
        aria-pressed={language === "en"}
        aria-label={labels.en}
      >
        🇺🇸 EN
      </button>
    </div>
  );
};
