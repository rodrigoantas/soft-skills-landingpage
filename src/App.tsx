import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import Header from "./components/Header";

import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

import GlobalStyle from "./styles/global";

import Routes from "./routes";

const App: React.FC = () => {
  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Header toggleTheme={toggleTheme} />
        <Routes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
