import React, { useEffect, useState } from "react";
import Title from "../Title";
import { NavLink, useLocation } from "react-router-dom";
import { Container, Link } from "./style";
import { UseModeContext } from "../../context/ModeContenxt";
import { useColorContext } from "../../context/ColorContext";
import { useProjectContext } from "../../context/ProjectContext";
import { projects } from "../../utils/projects";

const Projects = () => {
  const [mode] = UseModeContext();
  const [color] = useColorContext();
  const value = useProjectContext();

  const [data, setData] = useState(projects);
  const [tech, setTech] = useState("all");

  // useEffect(() => {}, []);

  return (
    <div className="container">
      <div className="wrapper">
        <Container mode={mode} color={color}>
          <Title>{value?.title}</Title>
          <div className="nav" data-aos="zoom-in">
            <div className="nav__item">
              <Link
                color={color}
                active={tech === "all" ? "true" : "false"}
                onClick={() => {
                  setData(projects);
                  setTech("all");
                }}
              >
                {value?.all}
              </Link>
            </div>
            <div className="nav__item">
              <Link
                color={color}
                active={tech === "html&css" ? "true" : "false"}
                onClick={() => {
                  setData(projects.filter((e) => e.tech === "html&css"));
                  setTech("html&css");
                }}
              >
                HTML & CSS
              </Link>
            </div>
            <div className="nav__item">
              <Link
                color={color}
                active={tech === "react" ? "true" : "false"}
                onClick={() => {
                  setData(projects.filter((e) => e.tech === "react"));
                  setTech("react");
                }}
              >
                React JS
              </Link>
            </div>
          </div>
          <div className="grid" data-aos="fade-down">
            {data.map(({ id, title, img, link }) => (
              <div key={id} className="grid__item">
                <img src={img} className="grid__item__img" alt="" />
                <div className="grid__item__bottom">
                  {title && (
                    <div className="grid__item__bottom__title">{title}</div>
                  )}
                  <NavLink
                    target="_blank"
                    to={link}
                    className="grid__item__bottom__link"
                  >
                    {value?.link}
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Projects;
