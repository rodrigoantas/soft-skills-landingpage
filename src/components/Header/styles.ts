import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 10px;

  width: 100%;
  justify-content: flex-end;
  align-items: center;

  svg {
    margin: 10px;
  }

  @media (max-width: 600px) {
    justify-content: flex-start;
  }
`;
