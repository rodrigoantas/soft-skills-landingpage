import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 10px;

  width: 100%;
  max-width: 104.8rem;
  justify-content: space-between;
  align-items: center;

  font-size: 100%;

  section {
    display: flex;
    align-items: center;
  }

  svg {
    margin: 10px;
  }

  @media (max-width: 600px) {
    justify-content: flex-start;
  }
`;
