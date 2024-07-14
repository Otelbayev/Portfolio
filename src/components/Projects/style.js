import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  .nav {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 0;
    gap: 25px;
    &__item {
      a {
        transition: 0.3s;
        text-decoration: none;
        font-weight: 600;
        font-size: 20px;
        color: ${({ mode }) =>
          mode === "light" ? "var(--dark)" : "var(--light)"};
        padding: 5px 0;
        &:hover {
          color: ${({ color }) => color};
        }
      }
    }
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    &__item {
      text-align: center;
      border: ${({ mode }) =>
        mode === "light"
          ? "1px solid rgba(0, 0, 0, 0.3)"
          : "1px solid rgba(255, 255, 255, 0.3)"};
      border-radius: 3px 3px 5px 5px;
      &__img {
        border-radius: 3px 3px 0 0;
        width: 100%;
        height: 70%;
        border-bottom: ${({ mode }) =>
          mode === "light"
            ? "1px solid rgba(0, 0, 0, 0.3)"
            : "1px solid rgba(255, 255, 255, 0.3)"};
      }
      &__bottom {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 10px;
        height: 30%;
        &__title {
          font-weight: 500;
          font-size: 20px;
        }
        &__link {
          color: ${({ color }) => color};
          font-weight: 600;
        }
      }
    }
  }
  @media (max-width: 800px) {
    .grid {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 530px) {
    .nav {
      margin: 25px 0;
      gap: 15px;
      &__item {
        a {
          font-size: 14px;
        }
      }
    }
    .grid {
      grid-template-columns: 1fr;
    }
  }
`;

export const Link = styled(NavLink)`
  border-bottom: ${({ color, active }) =>
    active === "true" && `1px solid ${color}`};
  color: ${({ color, active }) => active === "true" && `${color} !important`};
`;
