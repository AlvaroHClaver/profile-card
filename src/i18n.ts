import profile from "./config/profile.json";
import type { ProfileConfig } from "./config/types";

export const profileConfig = profile as ProfileConfig;
export const translations = profileConfig.translations;

export { type Language } from "./config/types";
