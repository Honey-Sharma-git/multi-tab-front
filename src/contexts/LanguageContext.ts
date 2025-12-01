import { createContext } from "react";
import { LANGUAGES } from "../constants/global-constants";

export type LanguagesKey = keyof typeof LANGUAGES;
interface LanguageContextType {
  lang: LanguagesKey;
  setLang: (lang: LanguageContextType["lang"]) => void;
}
export const LanguageContext = createContext<LanguageContextType>({
  lang: "ENGLISH",
  setLang: () => {},
});
