import React from "react";
import { Container } from "./style";
import { useColorContext } from "../../context/ColorContext";

const Title = ({ children, dataAos }) => {
  const [color] = useColorContext();
  return (
    <Container data-aos={dataAos} color={color}>
      <div className="title">{children}</div>
      <div className="line1"></div>
      <div className="line2"></div>
    </Container>
  );
};

export default Title;
