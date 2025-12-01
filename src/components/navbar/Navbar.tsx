import { memo, useContext } from "react";
import { LANGUAGES } from "../../constants/global-constants";
import { LanguageContext } from "../../contexts/LanguageContext";

const Navbar = memo(() => {
  const lang = useContext(LanguageContext);
  console.log("Navbar rendered");

  return (
    <div className="flex flex-row items-center gap-4">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <nav>
        <ul className="flex flex-row items-center gap-6">
          <a className="hover:underline" href="/home">
            <li>{LANGUAGES[lang].HOME}</li>
          </a>
          <a className="hover:underline" href="/about">
            <li>{LANGUAGES[lang].ABOUT}</li>
          </a>
          <a className="hover:underline" href="/contact">
            <li>{LANGUAGES[lang].CONTACT}</li>
          </a>
        </ul>
      </nav>
    </div>
  );
});
export default Navbar;
