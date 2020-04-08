import React, { ReactElement } from "react";
import styled from "styled-components";

const Title = styled.h1`
  text-align: left;
  font-size: 1.5em;
  font-weight: bold;
`;

const Wrapper = styled.header`
  padding: ${({ theme }) => `${theme.spacing.large} 0 ${theme.spacing.medium}`};
`;

const Header = (): ReactElement => {
  return (
    <Wrapper>
      <Title>React Pokédex</Title>
    </Wrapper>
  );
};

export default Header;
