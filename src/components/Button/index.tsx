import React, { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <Container type="button" {...props}>
    {children}
  </Container>
);

export default button;
