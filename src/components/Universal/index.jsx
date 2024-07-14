import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { UseModeContext } from "../../context/ModeContenxt";
import Sidebar from "../Sidebar";
import { Container, Content, Setting, SiteSetting, Wrap, Mode } from "./style";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { useLangContext } from "../../context/LangContext";
import { useColorContext } from "../../context/ColorContext";

const GlobalStyle = createGlobalStyle`
    body{
        background:${({ theme }) => theme.bg} ;
        color:${({ theme }) => theme.color} ;
    }
    `;
const Universal = () => {
  const [click, setClick] = useState(true);
  const [mode, setMode] = UseModeContext();
  const [data, language, setLanguage] = useLangContext();
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useColorContext();
  const theme = {
    bg: mode === "light" ? "#f2f2fc" : "rgba(0,0,0,1)",
    color: mode === "light" ? "var(--dark)" : "var(--light)",
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container $isopen={isOpen.toString()}>
        <div className="back" onClick={() => setIsOpen(false)}></div>
        <Sidebar isopen={[isOpen, setIsOpen]} />
        <Content mode={mode} color={color}>
          <button className="btn" onClick={() => setIsOpen(true)}>
            <Mode.Menu color={color} />
          </button>
          <div style={{ zIndex: 1 }}>
            <Outlet />
          </div>
          <SiteSetting mode={mode} $click={click.toString()}>
            <Wrap onClick={() => setClick(!click)}>
              <Setting />
            </Wrap>
            <button
              style={{ background: mode === "light" && "lightgray" }}
              onClick={() => {
                setMode("light");
                localStorage.setItem("mode", "light");
              }}
            >
              <Mode.Light />
            </button>
            <button
              style={{ background: mode === "dark" && "lightgray" }}
              onClick={() => {
                setMode("dark");
                localStorage.setItem("mode", "dark");
              }}
            >
              <Mode.Dark />
            </button>
            <form action="">
              <div>
                <label htmlFor="uz">Uzb</label>
                <input
                  onChange={() => {
                    setLanguage("uz");
                    localStorage.setItem("language", "uz");
                  }}
                  name="radio"
                  type="radio"
                  id="uz"
                  defaultChecked={language === "uz" ? true : false}
                />
              </div>
              <div>
                <label htmlFor="en">Eng</label>
                <input
                  onChange={() => {
                    setLanguage("en");
                    localStorage.setItem("language", "en");
                  }}
                  name="radio"
                  type="radio"
                  id="en"
                  defaultChecked={language === "en" ? true : false}
                />
              </div>
              <div>
                <label htmlFor="ru">Rus</label>
                <input
                  onChange={() => {
                    setLanguage("ru");
                    localStorage.setItem("language", "ru");
                  }}
                  name="radio"
                  type="radio"
                  id="ru"
                  defaultChecked={language === "ru" ? true : false}
                />
              </div>
            </form>
            <div className="colors">
              <div
                className="circle red"
                onClick={() => {
                  setColor("var(--red)");
                  localStorage.setItem("color", "var(--red)");
                }}
              ></div>
              <div
                className="circle blue"
                onClick={() => {
                  setColor("var(--blue)");
                  localStorage.setItem("color", "var(--blue)");
                }}
              ></div>
              <div
                className="circle green"
                onClick={() => {
                  setColor("var(--green)");
                  localStorage.setItem("color", "var(--green)");
                }}
              ></div>
              <div
                className="circle orange"
                onClick={() => {
                  setColor("var(--orange)");
                  localStorage.setItem("color", "var(--orange)");
                }}
              ></div>
              <div
                className="circle yellow"
                onClick={() => {
                  setColor("var(--yellow)");
                  localStorage.setItem("color", "var(--yellow)");
                }}
              ></div>
            </div>
          </SiteSetting>
        </Content>
      </Container>
    </ThemeProvider>
  );
};

export default Universal;
