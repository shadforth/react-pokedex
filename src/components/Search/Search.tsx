import React, { ReactElement } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: ${({ theme }) => theme.spacing.medium} 0;
`;

const SearchBar = styled.input`
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 3px;
  padding: ${({ theme }) => theme.spacing.medium};
  font-size: 1rem;
  font-family: "Nunito", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const Search = (): ReactElement => {
  return (
    <Wrapper>
      <SearchBar />
    </Wrapper>
  );
};

export default Search;
