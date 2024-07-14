import styled from "styled-components";

export const Content = styled.div`
  .name {
    font-weight: 500;
    font-size: 25px;
    margin: 50px 0 20px;
    span {
      color: ${({ color }) => color};
    }
  }
  .desc {
    font-size: 18px;
    font-weight: 500;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 50px;
    row-gap: 10px;
    margin: 20px 0;
    &__item {
      display: flex;
      align-items: center;
      gap: 10px;
      border-bottom: ${({ mode }) =>
        mode === "light"
          ? "1px solid rgba(0, 0, 0, 0.3)"
          : "1px solid rgba(255, 255, 255, 0.3)"};
      padding: 10px 0;
      font-size: 16px;
      font-weight: 400;
      &__left {
        font-weight: 600;
      }
    }
  }
  .buttons {
    display: flex;
    align-items: center;
    gap: 25px;
    padding: 20px 0;
    button {
      background: ${({ color }) => color};
      border: none;
      color: #fff;
      font-weight: 600;
      padding: 13px 20px;
      font-size: 20px;
      border-radius: 20px;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        transform: scale(1.03);
      }
      &:active {
        opacity: 0.5;
      }
    }
  }
  .techs {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 20px 0;
    &__item {
      &__title {
        font-weight: 500;
        font-size: 18px;
        padding: 0 0 2px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      &__content {
        width: 100%;
        height: 12px;
        background: lightgray;
        border-radius: 6px;
        &__tech {
          background: ${({ color }) => color};
          height: 100%;
          border-radius: 6px;
        }
        .html {
          width: 95%;
        }
        .css {
          width: 95%;
        }
        .js {
          width: 90%;
        }
        .react {
          width: 90%;
        }
        .ts {
          width: 75%;
        }
        .lib {
          width: 65%;
        }
      }
    }
  }
  @media (max-width: 550px) {
    .grid {
      grid-template-columns: 1fr;
    }
    .buttons {
      button {
        font-size: 16px;
      }
    }
    .techs {
      &__item {
        &__title {
          font-size: 16px;
        }
        &__content {
          height: 8px;
        }
      }
    }
  }
`;
