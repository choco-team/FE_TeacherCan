import styled, { css } from 'styled-components';

import theme from './theme';

export const flexCustom = (
  flexDirection = 'row',
  alignItems = 'center',
  justifyContent = 'center',
) => css`
  display: flex;
  flex-direction: ${flexDirection};
  align-items: ${alignItems};
  justify-content: ${justifyContent};
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

export const BorderedButton = styled(Button)`
  background-color: transparent;
  border: 2px solid ${theme.color.gray[700]};
  color: ${theme.color.gray[700]};

  &:active {
    background-color: ${theme.color.gray[200]};
  }
`;
