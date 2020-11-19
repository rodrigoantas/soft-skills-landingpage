import React from "react";

import { Container, Content } from "./styles";

import collab from "../../assets/png/collab.png";
import flex from "../../assets/png/flex.png";
import comunicate from "../../assets/png/comunicate.png";

const LandingPage: React.FC = () => {
  return (
    <>
      <Container>
        <h1>
          <span> Collab.</span>
          <span> Dialogue.</span>
          <span> Adapt.</span>
        </h1>

        <h2>
          Os três pilares que estruturam suas soft skills: Colaboração,
          Comunicação e Adaptação. Você pode ser um gênio mas o sucesso fica
          mais difícil sem essas habilidades. O seu papel não fica restrito ao
          código.
        </h2>
      </Container>

      <Content>
        <section>
          <img alt="test" src={collab} />
        </section>
        <section className="textsection">
          <h1 className="title1">Colaboração</h1>
          <p>
            Para que haja colaboração, é necessário a disponbilidade de no
            mínimo duas pessoas. As duas andam juntas, pois quando há a
            necessidade de uma colaboração, é importante que haja uma boa
            comunicação. É preciso estar atento ao o que o seu time do projeto
            precisa, e ajudar o máximo possível. Afinal, um trabalho em equipe
            com uma boa comunicação é muito mais veloz e eficiente do que um
            trabalho individual. Cada membro de um time pode se complementar de
            maneira diferente e para isso, é necessário estar disposto a
            colaborar.
          </p>
        </section>
      </Content>
      <Content>
        <section className="textsection odd-content">
          <h1 className="title2">Comunicação</h1>
          <p>
            Essa soft skill é de suma importância, inclusive fora do trabalho.
            Para que o receptor de uma mensagem entenda o que o emissor desta
            mensagem está querendo dizer, é necessário uma clareza de ambas as
            partes. Caso alguma mensagem seja entendida errada, os resultados
            podem ser intensos em um projeto. Na prática empresarial, é
            necessário que um tech leader seja claro e passe a ideia correta do
            que o projeto necessita para os desenvolvedores. E os
            desenvolvedores precisam saber se comunicar entre si, para resolver
            possíveis conflitos.
          </p>
        </section>
        <section>
          <img alt="test" src={comunicate} />
        </section>
      </Content>
      <Content>
        <section>
          <img alt="test" src={flex} />
        </section>
        <section className="textsection">
          <h1 className="title3">Adaptação</h1>
          <p>
            Também chamado de flexibilidade, é uma soft skill inevitável no
            mercado de trabalho. A capacidade de ser adaptável e flexível é uma
            das coisas mais importantes para um desenvolvedor. Cada projeto pede
            uma exigência diferente, e por isso é preciso se reinventar e se
            reestruturar. Na rotina do trabalho, é possível que apareçam
            demandas inesperadas e situações conflituosas. É preciso estar
            disponível para resolvê-las e se adaptar, talvez até aprender outra
            linguagem quando necessário.
          </p>
        </section>
      </Content>
    </>
  );
};

export default LandingPage;
