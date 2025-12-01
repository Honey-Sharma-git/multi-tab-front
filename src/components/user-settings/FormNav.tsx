import { memo, useCallback, useContext, useMemo } from "react";
import { LANGUAGES } from "../../constants/global-constants";
import { LanguageContext } from "../../contexts/LanguageContext";

interface Props {
  active: number;
  setActive: (tabId: number) => void;
}

const FormNav = memo((props: Props) => {
  const { active, setActive } = props;

  const lang = useContext(LanguageContext);

  const FormNav = useMemo(() => {
    return [
      { id: 1, label: LANGUAGES[lang].ACCOUNT },
      { id: 2, label: LANGUAGES[lang].VIEWS },
      { id: 3, label: LANGUAGES[lang].STATUS },
    ];
  }, [lang]);

  const toggleActive = useCallback(function toggleActive(tabId: number) {
    setActive(tabId);
  }, []);

  console.log("FormNav rendered");
  return (
    <nav>
      <ul className="border rounded-full p-2 w-fit flex flex-row gap-2">
        {FormNav.map((nav) => {
          const isActive = active === nav.id;
          return (
            <li key={nav.id}>
              <button
                onClick={() => toggleActive(nav.id)}
                className={`p-1 px-4 border rounded-full grid place-content-center  ${
                  isActive
                    ? "bg-pink-300"
                    : "cursor-pointer hover:bg-pink-300 hover:border-pink-300 hover:shadow"
                }`}
              >
                {nav.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
});
export default FormNav;
