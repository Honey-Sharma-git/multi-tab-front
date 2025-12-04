import { useContext, useMemo } from "react";
import { LANGUAGES } from "../../../constants/global-constants";
import { LanguageContext } from "../../../contexts/LanguageContext";
import UserSettingLayout from "../UserSettingLayout";

interface Props {
  onStatusChange: (status: string) => void;
  status: string;
}

const Status = (props: Props) => {
  const { lang } = useContext(LanguageContext);
  const { status, onStatusChange } = props;

  const statues = useMemo(() => {
    return [
      {
        id: 1,
        value: "Active",
        label: LANGUAGES[lang].ACTIVE,
      },
      {
        id: 2,
        value: "Offline",
        label: LANGUAGES[lang].OFFLINE,
      },
      {
        id: 3,
        value: "DND",
        label: LANGUAGES[lang].DND,
      },
      {
        id: 4,
        value: "Away",
        label: LANGUAGES[lang].AWAY,
      },
    ];
  }, [lang]);

  console.log("Status rendered");
  return (
    <UserSettingLayout title={LANGUAGES[lang].USER_STATUS}>
      <label htmlFor="status">{LANGUAGES[lang].SELECT_STATUS}</label>

      <select
        className="border p-1 px-2 rounded-lg shadow bg-gray-200 font-semibold appearance-auto"
        name="status"
        id="status"
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
      >
        {statues.map((status) => {
          return (
            <option key={status.id} value={status.value}>
              {status.label}
            </option>
          );
        })}
      </select>
    </UserSettingLayout>
  );
};

export default Status;
