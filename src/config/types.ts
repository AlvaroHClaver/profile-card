import type { detailIcons, socialIcons } from "./icons";

export type Language = "pt" | "en";
export type DetailIconName = keyof typeof detailIcons;
export type SocialIconName = keyof typeof socialIcons;

export type LocalizedText = Record<Language, string>;

export type ProfileConfig = {
  defaultLanguage: Language;
  avatar: {
    src: string;
    alt: string;
  };
  contact: {
    email: string;
  };
  infoItems: Array<{
    icon: DetailIconName;
    text?: string;
    translations?: LocalizedText;
  }>;
  techBadges: string[];
  socialLinks: Array<{
    icon: SocialIconName;
    url: string;
    label: string;
  }>;
  translations: Record<
    Language,
    {
      name: string;
      role: string;
      about: string;
      contactButton: string;
      languageLabels: Record<Language, string>;
    }
  >;
};

export type ThemeConfig = {
  font: {
    family: string;
  };
  layout: Record<
    | "cardWidth"
    | "cardWidthMobile"
    | "cardHeight"
    | "cardRadius"
    | "contentWidth"
    | "headerHeight"
    | "avatarSize"
    | "avatarTop"
    | "avatarLeft",
    string
  >;
  colors: Record<
    | "cardBg"
    | "cardBorder"
    | "primaryText"
    | "detailsText"
    | "action"
    | "profileBg"
    | "bulletIcon"
    | "bulletText"
    | "badgeBg"
    | "badgeBorder"
    | "badgeFont",
    string
  >;
  gradients: Record<"app" | "header" | "action", string>;
};
