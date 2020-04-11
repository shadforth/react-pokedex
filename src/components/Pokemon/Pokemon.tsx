import React, { Fragment, ReactElement } from "react";
import styled from "styled-components";
import PokemonInterface from "./PokemonInterface";
import Sprite from "./Sprite";
import Type from "../Type";

import { Modal, useModal } from "../Modal";

const Container = styled.button`
  width: 96%;
  border: none;
  border-radius: 2px;
  padding: ${({ theme }) =>
    `${theme.spacing.medium} ${theme.spacing.medium} ${theme.spacing.large}`};
  box-sizing: border-box;
  background: ${({ theme }) => theme.color.white};
  cursor: pointer;
  transition: all 0.2s linear;
  :hover {
    background: ${({ theme }) => theme.color.offWhite};
  }
  font-family: "Nunito", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const Number = styled.div`
  text-align: left;
  color: ${({ theme }) => theme.color.grey};
  font-weight: bold;
  font-size: 1rem;
`;

const Name = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.extraSmall};
  text-align: center;
  font-size: 1.4rem;
`;

const Center = styled.div`
  text-align: center;
`;

const Pokemon = ({ pokemon }: { pokemon: PokemonInterface }): ReactElement => {
  const { isShowing, toggle } = useModal();

  return (
    <Fragment>
      <Modal isShowing={isShowing} toggle={toggle} pokemon={pokemon} />
      <Container onClick={toggle}>
        <Number>{`#${pokemon.id}`}</Number>
        <Sprite pokemon={pokemon} />
        <Name>{pokemon.name}</Name>
        <Center>
          <Type types={pokemon.types} />
        </Center>
      </Container>
    </Fragment>
  );
};

export default Pokemon;
