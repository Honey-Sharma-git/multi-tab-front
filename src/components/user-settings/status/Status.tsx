import { useContext, useMemo } from "react";
import { LANGUAGES } from "../../../constants/global-constants";
import { LanguageContext } from "../../../contexts/LanguageContext";

interface Props {
  onStatusChange: (status: string) => void;
  status: string;
  title: string;
}

const Status = (props: Props) => {
  const lang = useContext(LanguageContext);
  const { status, onStatusChange, title } = props;

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
    <div className="flex flex-col gap-1 justify-center border p-2 rounded-lg">
      <h2 className="text-xl">{title}</h2>
      <hr className="border" />

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
    </div>
  );
};

export default Status;
