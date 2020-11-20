import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  width: 100%;
  /* background: ${(props) => props.theme.footerbg}; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem;
  img {
    max-width: 104.8rem;
    padding-bottom: 50px;
    border-bottom: 1px groove white;
  }

  ul {
    display: flex;
    justify-content: center;
    padding: 30px;
    li {
      padding: 30px;
      a {
        svg {
          color: ${(props) => props.theme.colors.primary};
          &:hover {
            transition: 0.6s;
            color: ${shade(0.2, "grey")} !important;
          }
        }
      }
    }
  }

  @media (max-width: 600px) {
    padding: 50px;
  }
`;
