import React, { ReactElement } from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Pokedex from "./components/Pokedex";
import Reset from "./Reset";
import ThemeProvider from "./ThemeProvider";

import data from "./data/pokemon.json";

const Wrapper = styled.div`
  max-width: 720px;
  height: auto;
  margin: 0 auto;
  font-family: "Nunito", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const Background = styled.div`
  background: #f6f7fc;
`;

const App = (): ReactElement => {
  const pokemon = data;
  return (
    <ThemeProvider>
      <Background>
        <Wrapper>
          <Reset />
          <Header />
          <Pokedex pokemon={pokemon} />
          <Footer />
        </Wrapper>
      </Background>
    </ThemeProvider>
  );
};

export default App;
