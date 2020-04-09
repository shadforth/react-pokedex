import React, { ReactElement } from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Pokedex from "./components/Pokedex";
import Reset from "./Reset";
import ThemeProvider from "./ThemeProvider";

const Wrapper = styled.div`
  max-width: 720px;
  padding-top: ${({ theme }) => theme.spacing.medium};
  margin: ${({ theme }) => `0 ${theme.spacing.small}`};
  font-family: "Nunito", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  ${({ theme }) => theme.media.desktop} {
    margin: 0 auto;
  }
`;

const App = (): ReactElement => {
  return (
    <ThemeProvider>
      <Reset />
      <Wrapper>
        <Header />
        <Pokedex />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
