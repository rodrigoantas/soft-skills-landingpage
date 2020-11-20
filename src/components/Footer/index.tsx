import React from "react";

import { SiLinkedin } from "react-icons/si";
import { FaTelegram, FaGithubSquare, FaRocket } from "react-icons/fa";

import { Container } from "./styles";

import adapt from "../../assets/png/adapt.png";

import Input from "../Input";
import Button from "../Button";

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <img alt="test" src={adapt} />
        <section>
          <h1>Que tal mudar o rumo da sua carreira?</h1>
          <p>Se inscreva no nosso programa e se aperfeiçoe nas soft skills!</p>
          <section>
            <Input icon={FaRocket} name="newsletter" />
            <Button> Inscrever-se</Button>
          </section>
        </section>
      </div>

      <ul>
        <li>
          <a href="https://www.linkedin.com/in/rodrigo-antas-1795071b3/">
            <SiLinkedin size={73} />
          </a>
        </li>
        <li>
          <a href="https://github.com/rodrigoantas">
            <FaGithubSquare size={80} />
          </a>
        </li>
        <li>
          <a href="https://t.me/rodrigoantas">
            <FaTelegram size={80} />
          </a>
        </li>
      </ul>
      <span>
        &reg; 2020 - made with &#10084; by Rodrigo Antas for Rocketseat
      </span>
    </Container>
  );
};

export default Header;
