import React from "react";
import img from "../../assets/jasco1.jpg";
import { Container, Icons, Img, Link } from "./style";
import { useLangContext } from "../../context/LangContext";
import { useColorContext } from "../../context/ColorContext";
import { UseModeContext } from "../../context/ModeContenxt";

const Home = () => {
  const [data, language, setLanguage, main] = useLangContext();
  const [color] = useColorContext();
  const [mode] = UseModeContext();
  return (
    <Container data-aos="zoom-in">
      <Img src={img} color={color} />
      <div className="title">{main?.name}</div>
      <div className="desc">{main?.job}</div>
      <div className="links">
        <Link target="_blank" to="https://github.com/Jasurbek1604">
          <Icons.Github color={color} />
        </Link>
        <Link target="_blank" to="https://teletype.in/@jasurbek1604">
          <Icons.Teletype color={color} />
        </Link>
        <Link target="_blank" to="mailto: jasurdev1604@gmail.com">
          <Icons.Email color={color} />
        </Link>
        <Link target="_blank" to="https://t.me/jasurdev1604">
          <Icons.Telegram color={color} />
        </Link>
        <Link target="_blank" to="https://instagram.com/jasur.otelbayev">
          <Icons.Instagram color={color} />
        </Link>
        <Link target="_blank" to="https://twitter.com/Jasurdev1604">
          <Icons.Twitter color={color} />
        </Link>
        <Link target="_blank" to="tel: +998935960246">
          <Icons.Phone color={color} />
        </Link>
        <Link target="_blank" to="https://youtube.com/@iwssei">
          <Icons.Youtube color={color} />
        </Link>
      </div>
    </Container>
  );
};

export default Home;
