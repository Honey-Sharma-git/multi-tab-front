import { useContext } from "react";
import { LANGUAGES, TEXT } from "../../../constants/global-constants";
import UserSettingLayout from "../UserSettingLayout";
import {
  LanguageContext,
  type LanguagesKey,
} from "../../../contexts/LanguageContext";

const Views = () => {
  const { lang, setLang } = useContext(LanguageContext);

  function onLangChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selectedLang = e.target.value as LanguagesKey;
    setLang(selectedLang);
  }

  console.log("View rendered");
  return (
    <UserSettingLayout title={LANGUAGES[lang].USER_STATUS}>
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
    </UserSettingLayout>
  );
};
export default Views;
