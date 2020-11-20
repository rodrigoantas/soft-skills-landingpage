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

  > div {
    width: 100%;
    display: flex;

    padding-bottom: 50px;
    padding-top: 50px;
    border-bottom: 1px groove white;
    border-top: 1px groove white;

    font-size: 5rem;

    > section {
      padding-left: 15rem;
      p {
        font-size: 60%;
        padding-top: 10px;
      }
      section {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 80px;

        button {
          background: #c53030;
          border-radius: 0%;
          &:hover {
            transition: 0.6s;
            background: #e8505b;
          }
        }
      }
    }
  }

  img {
    max-width: 700px;
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
