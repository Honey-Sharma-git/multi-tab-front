import { useContext, useState } from "react";
import Status from "../components/user-settings/status/Status";
import { LANGUAGES } from "../constants/global-constants";
import FormNav from "../components/user-settings/FormNav";
import { LanguageContext } from "../contexts/LanguageContext";
import Views from "../components/user-settings/views/Views";
import Account from "../components/user-settings/account/Account";
import { StatusContext } from "../contexts/StatusContext";

const UserSettings = () => {
  const lang = useContext(LanguageContext);
  const { status, setStatus } = useContext(StatusContext);
  const [activeTab, setActiveTab] = useState(1);

  function onStatusChange(status: string) {
    setStatus(status);
  }

  function handleSettingSave() {
    console.log(status);
  }

  console.log("UserSettings rendered");
  return (
    <div className="m-2">
      <FormNav active={activeTab} setActive={setActiveTab} />

      {activeTab === 1 && <Account />}
      {activeTab === 2 && <Views />}
      {activeTab === 3 && (
        <Status
          title={LANGUAGES[lang].USER_STATUS}
          onStatusChange={onStatusChange}
          status={status}
        />
      )}

      <button
        className="rounded-full border shadow p-1 px-4 cursor-pointer hover:bg-gray-300"
        onClick={handleSettingSave}
      >
        {LANGUAGES[lang].SAVE}
      </button>
    </div>
  );
};
export default UserSettings;
