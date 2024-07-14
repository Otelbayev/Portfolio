import { createContext, useContext, useState } from "react";
import {
  navbarEn,
  navbarUz,
  navbarRu,
  mainEn,
  mainUz,
  mainRu,
} from "../../utils/navabr";

const LangContext = createContext();

export const useLangContext = () => useContext(LangContext);

const LangProvider = ({ children }) => {
  const getLanguage = (prop) => {
    const obj = {
      en: navbarEn,
      uz: navbarUz,
      ru: navbarRu,
    };
    return obj[prop] || obj["en"];
  };

  const mainData = (prop) => {
    const obj = {
      en: mainEn,
      uz: mainUz,
      ru: mainRu,
    };
    return obj[prop] || obj["en"];
  };

  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );
  const data = getLanguage(language);

  const main = mainData(language);

  return (
    <LangContext.Provider value={[data, language, setLanguage, main]}>
      {children}
    </LangContext.Provider>
  );
};

export default LangProvider;
