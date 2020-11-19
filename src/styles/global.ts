import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    text-decoration: none;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.primary};
    -webkit-font-smoothing: antialiased;
  }


  body, input, button {
    font-family: 'Inter', serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style-type: none;
}


html {
  font-size: 62.5%;

   @media (max-width: 600px) {

    min-width: 100vw;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme.colors.background}
     }
}

  #root {
  min-height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;

}





`;
