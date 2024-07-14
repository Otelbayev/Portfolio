import React from "react";
import Title from "../Title";
import { useContactContexxt } from "../../context/ContactContext";
import { NavLink } from "react-router-dom";
import { Grid } from "./style";

const Contact = () => {
  const [contactData] = useContactContexxt();
  return (
    <div className="container" data-aos="fade-left">
      <div className="wrapper">
        <Title>{contactData?.title}</Title>
        <Grid>
          {contactData?.data.map(({ id, icon, title, link, linkFront }) => (
            <div className="grid" data-aos="zoom-in" key={id}>
              <div className="grid__icon">{icon}</div>
              <div className="grid__title">{title}</div>
              <NavLink target="_blank" className="grid__link" to={link}>
                {linkFront}
              </NavLink>
            </div>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Contact;
