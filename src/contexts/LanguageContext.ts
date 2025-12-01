import { createContext } from "react";
import type { LANGUAGES } from "../constants/global-constants";

type LanguagesKey = keyof typeof LANGUAGES;
export const LanguageContext = createContext<LanguagesKey>("ENGLISH");
