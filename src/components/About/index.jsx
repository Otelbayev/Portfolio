import React from "react";
import Title from "../Title";
import { useLangContext } from "../../context/LangContext";
import { Content } from "./style";
import { useColorContext } from "../../context/ColorContext";
import { UseModeContext } from "../../context/ModeContenxt";
import { useNavigate } from "react-router-dom";
import cv from "../../assets/resume.pdf";
import { useAboutContext } from "../../context/AboutContext";
const About = () => {
  const [data, language, setLanguage, main] = useLangContext();
  const [color] = useColorContext();
  const [mode] = UseModeContext();
  const [aboutData] = useAboutContext();
  const navigate = useNavigate();
  const handleClick = () => {
    const cvFile = cv;
    const downloadLink = document.createElement("a");
    downloadLink.href = cvFile;
    downloadLink.download = "Jasuebek O'telbayev CV.pdf";
    downloadLink.click();
  };
  return (
    <div className="container" data-aos="fade-left">
      <div className="wrapper">
        <Content color={color} mode={mode}>
          <Title>{aboutData?.title}</Title>
          <div className="name">
            {main?.name} <span>{main?.job}</span>
          </div>
          <div className="desc">{aboutData?.desc}</div>
          <div className="grid">
            {aboutData?.data.map(({ id, left, right }) => (
              <div className="grid__item" key={id}>
                <div className="grid__item__left">{left}:</div>
                <div className="grid__item__right">{right}</div>
              </div>
            ))}
          </div>
          <div className="buttons">
            <button onClick={handleClick}>{aboutData?.btn1}</button>
            <button onClick={() => navigate("/contact")}>
              {aboutData?.btn2}
            </button>
          </div>
          <div className="techs">
            <div className="techs__item">
              <div className="techs__item__title">
                <div>HTML</div>
                <div>95%</div>
              </div>
              <div className="techs__item__content">
                <div className="techs__item__content__tech html"></div>
              </div>
            </div>
            <div className="techs__item">
              <div className="techs__item__title">
                <div>CSS, SCSS, SASS</div>
                <div>95%</div>
              </div>
              <div className="techs__item__content">
                <div className="techs__item__content__tech css"></div>
              </div>
            </div>
            <div className="techs__item">
              <div className="techs__item__title">
                <div>JavaScript</div>
                <div>90%</div>
              </div>
              <div className="techs__item__content">
                <div className="techs__item__content__tech js"></div>
              </div>
            </div>
            <div className="techs__item">
              <div className="techs__item__title">
                <div>React</div>
                <div>90%</div>
              </div>
              <div className="techs__item__content">
                <div className="techs__item__content__tech react"></div>
              </div>
            </div>
            <div className="techs__item">
              <div className="techs__item__title">
                <div>TypeScript</div>
                <div>75%</div>
              </div>
              <div className="techs__item__content">
                <div className="techs__item__content__tech ts"></div>
              </div>
            </div>
            <div className="techs__item">
              <div className="techs__item__title">
                <div>Ant Design, Material UI</div>
                <div>65%</div>
              </div>
              <div className="techs__item__content">
                <div className="techs__item__content__tech lib"></div>
              </div>
            </div>
            <div className="techs__item">
              <div className="techs__item__title">
                <div>Tailwind CSS, Bootstrap</div>
                <div>65%</div>
              </div>
              <div className="techs__item__content">
                <div className="techs__item__content__tech lib"></div>
              </div>
            </div>
          </div>
        </Content>
      </div>
    </div>
  );
};

export default About;
