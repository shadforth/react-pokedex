import React, { ReactElement } from "react";
import styled from "styled-components";

const Title = styled.h1`
  text-align: left;
  font-size: 1.5em;
  font-weight: bold;
`;

const Header = (): ReactElement => {
  return <Title>Pokédex</Title>;
};

export default Header;
