import React, { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import { Pokemon } from "../Pokemon";

import ALL_POKEMON from "../../data/pokemon.json";

const Pokedex = styled.div``;

const PokemonContainer = styled.div`
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

const SearchBarContainer = styled.div`
  display: flex;
  margin: ${({ theme }) => `${theme.spacing.medium} 0`};
  padding: ${({ theme }) =>
    `${theme.spacing.medium} ${theme.spacing.medium} 8px`};
  box-sizing: border-box;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 2px;
  background: ${({ theme }) => theme.color.white};
  ::after {
    content: "\uD83D\uDD0D";
    display: block;
    margin: ${({ theme }) =>
      `3px ${theme.spacing.small} 0 ${theme.spacing.medium}`};
  }
`;

const SearchBar = styled.input`
  display: inline-block;
  margin-top: 0;
  padding-bottom: 14px;
  width: 100%;
  border: none;
  outline: none;
  font-size: 1rem;
  font-family: "Nunito", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const Display = (): ReactElement => {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState(ALL_POKEMON);

  useEffect(() => {
    const filterItems = searchParam => {
      if (!searchParam) {
        setItems(ALL_POKEMON);
      }
      const filtered = ALL_POKEMON.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchParam.toLowerCase())
      );
      setItems(filtered);
    };
    filterItems(query);
  }, [query]);

  return (
    <Pokedex>
      <SearchBarContainer>
        <SearchBar
          onChange={e => {
            setQuery(e.target.value);
          }}
          placeholder="Search for a Pokémon..."
        />
      </SearchBarContainer>
      <PokemonContainer>
        {items.map((item, index) => {
          return <Pokemon key={index} pokemon={item} />;
        })}
      </PokemonContainer>
    </Pokedex>
  );
};

export default Display;
