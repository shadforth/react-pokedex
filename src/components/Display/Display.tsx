import React, { Fragment, ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import { Pokemon } from "../Pokemon";
import { Search } from "../Search";

import ALL_POKEMON from "../../data/pokemon.json";

const Pokedex = styled.div`
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

const SearchBar = styled.input`
  margin: ${({ theme }) => theme.spacing.medium} 0;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 2px;
  padding: ${({ theme }) => theme.spacing.medium};
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
    <Fragment>
      <SearchBar
        onChange={e => {
          setQuery(e.target.value);
        }}
      />
      <Pokedex>
        {items.map((item, index) => {
          return <Pokemon key={index} pokemon={item} />;
        })}
      </Pokedex>
    </Fragment>
  );
};

export default Display;
