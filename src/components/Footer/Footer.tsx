import React, { ReactElement } from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  margin-top: ${({ theme }) => theme.spacing.small};
  text-align: center;
  color: ${({ theme }) => theme.color.white};
`;

const Copyright = styled.span`
  font-size: 0.9rem;
  & > a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};
  }
  & > a:hover {
    color: ${({ theme }) => theme.color.offwhite};
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
