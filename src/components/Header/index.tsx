import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";

import { WiMoonAltFirstQuarter } from "react-icons/wi";
import { VscRocket } from "react-icons/vsc";

import { Container } from "./styles";

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);
  return (
    <Container>
      <section>
        <VscRocket size={30} />
        <p> Soft Skills </p>
      </section>
      <section>
        <WiMoonAltFirstQuarter size={30} />
        <Switch
          onChange={toggleTheme}
          checked={title === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          onColor="#6320ee"
        />
      </section>
    </Container>
  );
};

export default Header;
