import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.button`
  background: #6320ee;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: ${(props) => props.theme.colors.primary};

  width: 200px;
  font-weight: 500;
  transition: 0.2s;

  letter-spacing: 3px;

  &:hover {
    background: ${shade(0.2, "#6320ee")};
  }
`;
