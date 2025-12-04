import { useMemo, useState } from "react";
import UserSettings from "./app/UserSettings";
import GlobalNav from "./components/navbar/GlobalNav";
import { LanguageContext, type LanguagesKey } from "./contexts/LanguageContext";
import { StatusContext } from "./contexts/StatusContext";
import ThemeProvider from "./components/ThemeProvider";

const App = () => {
  const [status, setStatus] = useState<string>("Away");
  const [lang, setLang] = useState<LanguagesKey>("ENGLISH");

  const langValue = useMemo(() => {
    return { lang, setLang };
  }, [lang]);

  const statusValue = useMemo(() => {
    return { status, setStatus };
  }, [status]);

  console.log("App rendered");
  return (
    <ThemeProvider>
      <LanguageContext value={langValue}>
        <StatusContext value={statusValue}>
          <GlobalNav />
          <UserSettings />
        </StatusContext>
      </LanguageContext>
    </ThemeProvider>
  );
};
export default App;
