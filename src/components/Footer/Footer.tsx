import React, { ReactElement } from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  margin: ${({ theme }) => `${theme.spacing.medium} 0 ${theme.spacing.large}`};
  text-align: center;
  color: ${({ theme }) => theme.color.grey};
`;

const Copyright = styled.span`
  font-size: 0.9rem;
  & > a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.grey};
  }
  & > a:hover {
    text-decoration: underline;
  }
`;

const Footer = (): ReactElement => {
  return (
    <Wrapper>
      <Copyright>
        2020 &copy;{" "}
        <a href="https://www.github.com/shadforth/react-pokedex">
          View on GitHub
        </a>
      </Copyright>
    </Wrapper>
  );
};

export default Footer;
