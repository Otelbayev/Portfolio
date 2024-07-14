import React from "react";
import code from "../../assets/code-solid.svg?react";
import styled from "styled-components";
import { UseModeContext } from "../../context/ModeContenxt";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 10px;
  .name {
    text-transform: uppercase;
    letter-spacing: 0;
    font-weight: 800;
    display: flex;
    flex-direction: column;
    gap: 0;
    font-size: 25px;
    line-height: 20px;
    user-select: none;
  }
`;

const Icon1 = styled(code)`
  width: 45px;
  height: 40px;
  fill: ${({ mode }) => (mode === "light" ? "var(--dark)" : "var(--light)")};
`;

const Logo = ({ setisopen }) => {
  const [mode] = UseModeContext();
  const navigate = useNavigate();
  return (
    <Container
      onClick={() => {
        navigate("/");
        setisopen(false);
      }}
    >
      <Icon1 mode={mode} />
      <div className="name">
        <div>Jasurbek</div>
        <div>O'telbayev</div>
      </div>
    </Container>
  );
};

export default Logo;
