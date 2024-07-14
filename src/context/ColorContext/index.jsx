import { createContext, useContext, useState } from "react";

const ColorContext = createContext();

export const useColorContext = () => useContext(ColorContext);

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState(
    localStorage.getItem("color") || "var(--red)"
  );
  return (
    <ColorContext.Provider value={[color, setColor]}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;
