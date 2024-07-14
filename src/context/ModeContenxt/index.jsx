import { createContext, useContext, useState } from "react";

const ModeContext = createContext();

export const UseModeContext = () => useContext(ModeContext);

const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");
  return (
    <ModeContext.Provider value={[mode, setMode]}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeProvider;
