import React, { Fragment, ReactElement } from "react";
import styled from "styled-components";
import { TypeColors } from "./TypeColors";

const Box = styled.div`
  display: inline-block;
  margin: ${({ theme }) =>
    `${theme.spacing.extraSmall} ${theme.spacing.extraSmall} ${theme.spacing.extraSmall} 0`};
  padding: ${({ theme }) =>
    `6px ${theme.spacing.small} ${theme.spacing.extraSmall}`};
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 400;
  color: #ffffff;
  ${(props: { type: string }) => {
    return `background: ${TypeColors[props.type.toLowerCase()]}`;
  }};
`;

const Type = ({ types }: { types: Array<string> }): ReactElement => {
  return (
    <Fragment>
      {types.map(type => {
        return (
          <Box key={type} type={type}>
            {type}
          </Box>
        );
      })}
    </Fragment>
  );
};

export default Type;
