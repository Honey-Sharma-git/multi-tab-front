import { useState } from "react";
import UserSettings from "./app/UserSettings";
import GlobalNav from "./components/navbar/GlobalNav";
import { LanguageContext } from "./contexts/LanguageContext";
import { StatusContext } from "./contexts/StatusContext";

const App = () => {
  const [status, setStatus] = useState<string>("Away");

  console.log("App rendered");
  return (
    <LanguageContext value={"ENGLISH"}>
      <StatusContext value={{ status, setStatus }}>
        <GlobalNav />
        <UserSettings />
      </StatusContext>
    </LanguageContext>
  );
};
export default App;
