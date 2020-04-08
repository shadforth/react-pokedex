import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { PokemonInterface } from "../Pokemon";
import { Sprite } from "../Pokemon";
import Type from "../Type";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.color.black};
  opacity: 0.5;
  z-index: 1040;
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  font-family: "Nunito", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  z-index: 1050;
`;

const ModalBox = styled.div`
  width: 400px;
  height: 560px;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  margin: 0;
  border-radius: 2px;
  padding: ${({ theme }) => theme.spacing.medium};
  background: ${({ theme }) => theme.color.white};
  z-index: 100;
`;

const ModalExitButton = styled.button`
  margin-left: 0.5rem;
  border: none;
  font-size: 1rem;
  font-weight: 700;
  float: right;
  cursor: pointer;
`;

const Information = styled.div`
  padding: ${({ theme }) => theme.spacing.medium} 0;
`;

const Name = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.extraSmall};
  font-size: 1.4rem;
`;

const Description = styled.p`
  margin: ${({ theme }) => theme.spacing.medium} 0;
  color: ${({ theme }) => theme.color.grey};
`;

const Subtitle = styled.div`
  display: inline-block;
  font-weight: 700;
  width: 100px;
`;

const Grey = styled.span`
  color: ${({ theme }) => theme.color.grey};
`;

const Divider = styled.hr`
  height: 1px;
  border: none;
  background: ${({ theme }) => theme.color.lightGrey};
  margin: ${({ theme }) => theme.spacing.medium} 0;
`;

const StatisticContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const Statistic = ({
  title,
  statistic,
}: {
  title: string;
  statistic: string;
}) => {
  return (
    <StatisticContainer>
      <Subtitle>{title}</Subtitle> <Grey>{statistic}</Grey>
    </StatisticContainer>
  );
};

const Modal = ({
  isShowing,
  hide,
  pokemon,
}: {
  isShowing: boolean;
  hide: any;
  pokemon: PokemonInterface;
}) =>
  isShowing
    ? ReactDOM.createPortal(
        <Fragment>
          <Overlay />
          <Wrapper>
            <ModalBox>
              <ModalExitButton onClick={hide}>&times;</ModalExitButton>
              <Information>
                <Name>{pokemon.name}</Name>
                <Type types={pokemon.types} />
                <Sprite pokemon={pokemon} />
                <Description>{pokemon.description}</Description>
                <Divider />
                <Statistic title="Height" statistic={pokemon.height.maximum} />
                <Statistic title="Weight" statistic={pokemon.weight.maximum} />
                <Statistic title="Attack" statistic={pokemon.base_attack} />
                <Statistic title="Defense" statistic={pokemon.base_defense} />
                <Statistic title="Generation" statistic={pokemon.generation} />
              </Information>
            </ModalBox>
          </Wrapper>
        </Fragment>,
        document.body
      )
    : null;

export default Modal;
