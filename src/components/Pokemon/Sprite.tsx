import React, { ReactElement } from "react";
import styled from "styled-components";
import PokemonInterface from "./PokemonInterface";

const SpriteContainer = styled.div`
  text-align: center;
`;

const Sprite = ({ pokemon }: { pokemon: PokemonInterface }) => {
  return (
    <SpriteContainer>
      <img src={`/sprites/${pokemon.id}.png`} alt={pokemon.name} />
    </SpriteContainer>
  );
};

export default Sprite;
