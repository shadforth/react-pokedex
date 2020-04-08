import React, { ReactElement } from "react";
import styled from "styled-components";
import PokemonInterface from "../Pokemon/PokemonInterface";
import Pokemon from "../Pokemon/Pokemon";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100%;
  ${({ theme }) => theme.media.tablet} {
    margin-bottom: 0;
    & > * + * {
      margin-top: 0;
    }
  }
  ${({ theme }) => theme.media.desktop} {
    margin: 0 auto;
  }
`;

const Display = ({
  pokemon,
}: {
  pokemon: Array<PokemonInterface>;
}): ReactElement => {
  return (
    <Wrapper>
      {pokemon.map((item, index) => {
        return <Pokemon key={index} pokemon={item} />;
      })}
    </Wrapper>
  );
};

export default Display;
