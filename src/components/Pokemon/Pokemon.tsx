import React, { ReactElement } from "react";
import styled from "styled-components";
import PokemonInterface from "./PokemonInterface";
import Sprite from "./Sprite";
import Type from "../Type";

import { Modal, useModal } from "../Modal";

const Container = styled.div`
  width: 49%;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  border-radius: 5px;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
  padding: ${({ theme }) =>
    `${theme.spacing.medium} ${theme.spacing.medium} ${theme.spacing.large}`};
  box-sizing: border-box;
  background: ${({ theme }) => theme.color.white};
  cursor: pointer;
`;

const Number = styled.span`
  color: ${({ theme }) => theme.color.grey};
  font-weight: bold;
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
    <Container onClick={toggle}>
      <Number>{`#${pokemon.id}`}</Number>
      <Sprite pokemon={pokemon} />
      <Name>{pokemon.name}</Name>
      <Center>
        <Type types={pokemon.types} />
      </Center>
      <Modal isShowing={isShowing} hide={toggle} pokemon={pokemon} />
    </Container>
  );
};

export default Pokemon;
