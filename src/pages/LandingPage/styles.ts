import styled, { keyframes } from "styled-components";

const colorCycle = keyframes`
0%, 55% {
  filter: grayscale(100)

}
11%, 33% {
  filter: none;


}
`;

export const Image = styled.div`
  width: 100%;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  display: flex;
  justify-content: center;
  padding: 6rem;
  img {
    max-width: 960px;
  }
`;

export const Container = styled.div`
  max-width: 104.8rem;
  padding: 0rem 2.4rem 10rem 2.4rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;

  font-size: 62.5%;

  h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    font-size: 12.8rem;
    line-height: 12.6rem;
    letter-spacing: -1rem;
    color: #fff;

    span {
      padding: 1rem;
      filter: grayscale(100);

      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      animation: ${colorCycle} 10s ease-in-out infinite;
    }

    span:nth-child(1) {
      background-image: linear-gradient(90deg, #007cf0, #00dfd9);
    }
    span:nth-child(2) {
      background-image: linear-gradient(90deg, #7928ca, #ff0080);
      animation-delay: 3.33s;
    }
    span:nth-child(3) {
      background-image: linear-gradient(90deg, #ff4d4d, #f9cb28);
      animation-delay: 6.66s;
    }
  }

  h2 {
    margin: 6.4rem 0;
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: -0.04rem;
    text-align: center;
    color: #888;
  }
`;

export const Content = styled.div`
  max-width: 104.8rem;
  width: 1048px;
  padding: 0rem 2.4rem 15rem 2.4rem;
  display: flex;

  letter-spacing: 2.5px;

  img {
    max-width: 400px;
  }

  section.odd-content {
    p {
      text-align: right;
    }
  }

  section.textsection {
    padding: 30px;

    h1 {
      padding: 20px;
      color: #6320ee;
      display: flex;
      justify-content: center;
      font-size: 5rem;
      margin-top: -30px;

      filter: grayscale(100);

      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      animation: ${colorCycle} 5s ease-in-out infinite;
    }

    p {
      margin-left: 20px;
      padding-right: 50px;
      padding-top: 50px;
      color: ${(props) => props.theme.colors.primary};
      font-size: 1.6rem;
      padding-left: 20px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }

  .title1 {
    background-image: linear-gradient(90deg, #007cf0, #00dfd9);
  }
  .title2 {
    background-image: linear-gradient(90deg, #7928ca, #ff0080);
    animation-delay: 3.33s !important;
  }
  .title3 {
    background-image: linear-gradient(90deg, #ff4d4d, #f9cb28);
    animation-delay: 6.66s !important;
  }
`;
