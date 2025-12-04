import { useContext } from "react";
import { LANGUAGES, TEXT } from "../../../constants/global-constants";
import UserSettingLayout from "../UserSettingLayout";
import {
  LanguageContext,
  type LanguagesKey,
} from "../../../contexts/LanguageContext";
import { ThemeContext } from "../../../contexts/ThemeContext";

const Views = () => {
  const { lang, setLang } = useContext(LanguageContext);
  const { theme, setTheme } = useContext(ThemeContext);

  function onLangChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selectedLang = e.target.value as LanguagesKey;
    setLang(selectedLang);
  }

  console.log("View rendered");
  return (
    <UserSettingLayout title={LANGUAGES[lang].USER_VIEW_SETTINGS}>
      <label htmlFor="choose-language">{LANGUAGES[lang].CHOOSE_SYS_LANG}</label>
      <div className="flex flex-row gap-2 items-center">
        <input
          id="english"
          type="radio"
          name="choose-language"
          value={"ENGLISH"}
          checked={lang === "ENGLISH"}
          onChange={onLangChange}
        />
        <label htmlFor="english">{TEXT.ENGLISH}</label>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <input
          id="hindi"
          type="radio"
          name="choose-language"
          value={"HINDI"}
          checked={lang === "HINDI"}
          onChange={onLangChange}
        />
        <label htmlFor="hindi">{TEXT.HINDI}</label>
      </div>

      <div>
        <label htmlFor="theme">{LANGUAGES[lang].CHOOSE_THEME}</label>
        <div className="flex flex-row gap-2 items-center">
          <input
            type="radio"
            name="theme"
            id="light"
            checked={theme === "light"}
            onChange={() => setTheme("light")}
          />
          <label htmlFor="light">{LANGUAGES[lang].LIGHT}</label>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <input
            type="radio"
            name="theme"
            id="dark"
            checked={theme === "dark"}
            onChange={() => setTheme("dark")}
          />
          <label htmlFor="dark">{LANGUAGES[lang].DARK}</label>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <input
            type="radio"
            name="theme"
            id="auto"
            checked={theme === "auto"}
            onChange={() => setTheme("auto")}
          />
          <label htmlFor="auto">{LANGUAGES[lang].AUTO}</label>
        </div>
      </div>
    </UserSettingLayout>
  );
};
export default Views;
