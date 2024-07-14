import { createContext, useContext } from "react";
import { useLangContext } from "../../context/LangContext";
import { aboutEn, aboutRu, aboutUz } from "../../utils/about";

const AboutContext = createContext();

export const useAboutContext = () => useContext(AboutContext);

const AboutProvider = ({ children }) => {
  const [data, language] = useLangContext();

  const getAboutLang = (prop) => {
    const obj = {
      uz: aboutUz,
      ru: aboutRu,
      en: aboutEn,
    };
    return obj[prop] || obj["en"];
  };

  const aboutData = getAboutLang(language);

  return (
    <AboutContext.Provider value={[aboutData]}>
      {children}
    </AboutContext.Provider>
  );
};

export default AboutProvider;
