import React, { ReactElement } from "react";
import styled from "styled-components";
import Display from "../Display";

const Wrapper = styled.div``;

const Pokedex = ({ pokemon }: { pokemon: Array<any> }): ReactElement => {
  return (
    <Wrapper>
      <Display pokemon={pokemon} />
    </Wrapper>
  );
};

export default Pokedex;
