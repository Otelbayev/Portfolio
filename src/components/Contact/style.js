import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 100px;
  margin-top: 100px;
  .grid {
    text-align: center;
    &__title {
      padding: 10px 0;
      font-weight: 700;
      font-size: 18px;
      letter-spacing: 1px;
    }
    &__link {
      font-size: 16px;
      color: blue;
    }
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 50px;
  }
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
    row-gap: 40px;
  }
`;
