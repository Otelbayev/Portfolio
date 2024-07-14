import React from "react";
import { Container, Link } from "./style";
import { UseModeContext } from "../../context/ModeContenxt";
import Logo from "../Logo";
import { useLangContext } from "../../context/LangContext";
import { useColorContext } from "../../context/ColorContext";

const Sidebar = ({ isopen }) => {
  const [mode] = UseModeContext();
  const [data] = useLangContext();
  const [color] = useColorContext();
  const [isOpen, setIsOpen] = isopen;
  return (
    <Container mode={mode} $isopen={isOpen.toString()}>
      <Logo setisopen={setIsOpen} />
      <div className="nav">
        {data.map(({ id, title, path, icon }) => (
          <div key={id} className="nav__item">
            <Link
              color={color}
              onClick={() => setIsOpen(false)}
              mode={mode}
              to={path}
            >
              {icon} {title}
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Sidebar;
