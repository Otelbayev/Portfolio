import { createContext, useContext } from "react";
import { useLangContext } from "../LangContext";
import { projectEn, projectRu, projectUz } from "../../utils/projects";

const ProjectContext = createContext();

export const useProjectContext = () => useContext(ProjectContext);

const ProjectProvider = ({ children }) => {
  const [data, language] = useLangContext();
  const getProjectLang = (prop) => {
    const obj = {
      uz: projectUz,
      ru: projectRu,
      en: projectEn,
    };
    return obj[prop] || obj["en"];
  };
  const value = getProjectLang(language);

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
};

export default ProjectProvider;
