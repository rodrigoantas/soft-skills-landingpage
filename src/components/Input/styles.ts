import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.primary};

  padding: 16px;
  width: 100%;

  display: flex;
  align-items: center;

  color: #c53030;
  border: 2px solid ${(props) => props.theme.colors.primary};

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: grey;
    &::placeholder {
      color: grey;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
