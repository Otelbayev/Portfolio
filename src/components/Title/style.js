import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  .title {
    font-weight: 800;
    font-size: 30px;
  }
  .line1 {
    width: 100px;
    height: 5px;
    background: ${({ color }) => color};
  }
  .line2 {
    width: 50px;
    height: 5px;
    background: ${({ color }) => color};
  }
`;
