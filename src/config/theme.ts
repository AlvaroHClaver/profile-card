import theme from "./theme.json";
import type { ThemeConfig } from "./types";

const cssVariables = {
  font: {
    family: "--font-family",
  },
  layout: {
    avatarLeft: "--avatar-left",
    avatarSize: "--avatar-size",
    avatarTop: "--avatar-top",
    cardHeight: "--profile-card-height",
    cardRadius: "--profile-card-radius",
    cardWidth: "--profile-card-width",
    cardWidthMobile: "--profile-card-width-mobile",
    contentWidth: "--content-width",
    headerHeight: "--header-height",
  },
  colors: {
    action: "--color-action",
    badgeBg: "--color-badge-bg",
    badgeBorder: "--color-badge-border",
    badgeFont: "--color-badge-font",
    bulletIcon: "--color-bullet-icon",
    bulletText: "--color-bullet-text",
    cardBg: "--color-card-bg",
    cardBorder: "--color-card-border",
    detailsText: "--color-details-text",
    primaryText: "--color-primary-text",
    profileBg: "--color-profile-bg",
  },
  gradients: {
    action: "--gradient-action",
    app: "--gradient-app",
    header: "--gradient-header",
  },
} as const;

export const themeConfig = theme as ThemeConfig;

export const applyTheme = (config: ThemeConfig) => {
  const root = document.documentElement;

  Object.entries(cssVariables.font).forEach(([key, variable]) => {
    root.style.setProperty(variable, config.font[key as keyof ThemeConfig["font"]]);
  });

  Object.entries(cssVariables.layout).forEach(([key, variable]) => {
    root.style.setProperty(
      variable,
      config.layout[key as keyof ThemeConfig["layout"]],
    );
  });

  Object.entries(cssVariables.colors).forEach(([key, variable]) => {
    root.style.setProperty(
      variable,
      config.colors[key as keyof ThemeConfig["colors"]],
    );
  });

  Object.entries(cssVariables.gradients).forEach(([key, variable]) => {
    root.style.setProperty(
      variable,
      config.gradients[key as keyof ThemeConfig["gradients"]],
    );
  });
};
