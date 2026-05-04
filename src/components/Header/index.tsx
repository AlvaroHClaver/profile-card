import { LanguageSwitch } from "../LanguageSwitch";

export const Header = () => {
  return (
    <header className="w-full bg-header-bg h-32 rounded-tl-2xl rounded-tr-2xl flex justify-end p-2.5">
      <LanguageSwitch />
    </header>
  );
};
