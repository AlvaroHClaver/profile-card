import { useState } from "react";

const BASE = "cursor-pointer rounded-lg w-13.5 h-8";
const ACTIVE = `${BASE} bg-action`;
const OFF = BASE;

type Language = "pt" | "en";

export const LanguageSwitch = () => {
  const [language, setLanguage] = useState<Language>("pt");

  return (
    <div className="w-30 h-10 bg-card-bg rounded-[10px] text-primary-text flex justify-around items-center">
      <button
        type="button"
        onClick={() => setLanguage("pt")}
        className={language === "pt" ? ACTIVE : OFF}
      >
        🇧🇷 PT
      </button>

      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={language === "en" ? ACTIVE : OFF}
      >
        🇺🇸 EN
      </button>
    </div>
  );
};
