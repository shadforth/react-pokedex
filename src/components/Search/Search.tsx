import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import ALL_POKEMON from "../../data/pokemon.json";

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

const Search = (): ReactElement => {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState(ALL_POKEMON);

  const filterItems = ({ searchParam }: { searchParam: string }) => {
    setItems(
      ALL_POKEMON.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchParam.toLowerCase())
      )
    );
  };

  return (
    <SearchBar
      onChange={e => {
        console.log(e.target.value);
        setQuery(e.target.value);
      }}
    />
  );
};

export default Search;
