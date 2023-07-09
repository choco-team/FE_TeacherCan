import styled from 'styled-components';

import * as T from './type';

export const Input = styled.input<T.StyledInput>`
  width: ${({ width = '100%' }) => width};
  max-width: ${({ $size, maxWidth = $size === 'sm' ? '240px' : '480px' }) =>
    maxWidth};
  min-width: ${({ minWidth = '120px' }) => minWidth};
  padding: ${({ dense, padding = dense ? '8px' : '16px' }) => padding};
  margin: ${({ margin = '0' }) => margin};
  border: ${({ theme, border = `1px solid ${theme.border.gray}` }) => border};
  border-radius: ${({ borderRadius = '5px' }) => borderRadius};
  background-color: ${({ theme, backgroundColor = theme.background.gray }) =>
    backgroundColor};
  color: ${({ theme, color = theme.text }) => color};
  font-size: ${({ $size, fontSize = $size === 'sm' ? '1.4rem' : 'inherit' }) =>
    fontSize};

  &:hover {
    border-color: ${({ theme }) => theme.hoverBorder.gray};
  }

  &:focus {
    border-color: ${({ theme }) => theme.border.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.hoverBorder.gray};
  }

  &:read-only,
  &:disabled {
    &:hover {
      border: ${({ theme, border = `1px solid ${theme.border.gray}` }) =>
        border};
    }

    &:focus {
      border: ${({ theme, border = `1px solid ${theme.border.gray}` }) =>
        border};
    }
  }

  &:disabled {
    background-color: ${({ theme }) => theme.background.disabled};
    color: ${({ theme }) => theme.subText};
  }
`;
