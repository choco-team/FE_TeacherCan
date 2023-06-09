import styled, { css } from 'styled-components';

import theme from './theme';

export const flexCustom = (
  flexDirection: 'row' | 'row-reverse' | 'column' | 'column-reverse',
  alignItems:
    | 'center'
    | 'start'
    | 'end'
    | 'self-start'
    | 'self-end'
    | 'flex-start'
    | 'flex-end'
    | 'normal'
    | 'stretch'
    | 'baseline'
    | 'first baseline'
    | 'last baseline',
  justifyContent:
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'left'
    | 'right'
    | 'normal'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch',
  gap = '0',
) => css`
  display: flex;
  flex-direction: ${flexDirection};
  align-items: ${alignItems};
  justify-content: ${justifyContent};
  gap: ${gap};
`;

export const Button = styled.button`
  padding: 8px 12px;
  border-radius: 2em;
  background-color: ${theme.color.gray[700]};
  color: ${theme.color.white};
  font-weight: 500;
  text-align: center;
  cursor: pointer;

  &:active {
    background-color: ${theme.color.gray[900]};
  }

  &:disabled {
    background-color: ${theme.color.gray[300]};
    cursor: not-allowed;
  }
`;

export const H1 = styled.h1`
  color: ${theme.color.gray};
  font-weight: 500;
`;

export const BorderedButton = styled(Button)`
  background-color: transparent;
  border: 2px solid ${theme.color.gray[700]};
  color: ${theme.color.gray[700]};

  &:active {
    background-color: ${theme.color.gray[200]};
  }
`;
