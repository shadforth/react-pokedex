import React, { ReactElement } from "react";
import styled from "styled-components";
import useSearchFilter from "../../hooks/useSearchFilter";
import { FixedSizeGrid } from "react-window";
import { Pokemon } from "../Pokemon";

import pokemon from "../../data/pokemon.json";

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
  margin: ${({ theme }) =>
    `${theme.spacing.medium} 13px ${theme.spacing.medium} 0`};
  padding: ${({ theme }) =>
    `${theme.spacing.medium} ${theme.spacing.medium} 8px`};
  box-sizing: border-box;
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

const Row = ({ data, columnIndex, rowIndex, style }) => {
  return (
    <div style={{ ...style, overflowX: "hidden" }}>
      <Pokemon
        pokemon={data[columnIndex === 0 ? rowIndex * 2 : rowIndex * 2 + 1]}
      />
    </div>
  );
};

const rowCount = items => {
  return Math.ceil(items.length / 2);
};

const Display = (): ReactElement => {
  const [items, filterItems] = useSearchFilter(pokemon);
  return (
    <Pokedex>
      <SearchBarContainer>
        <SearchBar
          onChange={e => {
            filterItems(e.target.value);
          }}
          placeholder="Search for a Pokémon..."
        />
      </SearchBarContainer>
      <PokemonContainer>
        <FixedSizeGrid
          columnCount={2}
          columnWidth={360}
          height={800}
          rowCount={rowCount(items)}
          rowHeight={270}
          width={800}
          itemData={items}
        >
          {Row}
        </FixedSizeGrid>
      </PokemonContainer>
    </Pokedex>
  );
};

export default Display;
