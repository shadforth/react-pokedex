import React, { ReactElement } from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Display from "./components/Display";
import Reset from "./Reset";
import ThemeProvider from "./ThemeProvider";

const Wrapper = styled.div`
  max-width: 720px;
  margin: 0 auto;
  font-family: "Nunito", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const Background = styled.div`
  min-height: 100vh;
  background: #f6f7fc;
`;

const App = (): ReactElement => {
  return (
    <ThemeProvider>
      <Background>
        <Wrapper>
          <Reset />
          <Header />
          <Display />
          <Footer />
        </Wrapper>
      </Background>
    </ThemeProvider>
  );
};

export default App;
