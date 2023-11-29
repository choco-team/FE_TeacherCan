import styled from 'styled-components';

import theme from '@Styles/theme';

import * as T from './type';

export const BORDER_STYLE = {
  solid: `1px solid ${theme.color.gray[400]}`,
  dashed: `2px dashed ${theme.color.gray[400]}`,
} as const;

export const TextArea = styled.textarea<T.StyledTextArea>`
  width: ${({ width = '100%' }) => width};
  max-width: ${({ $size, maxWidth = $size === 'sm' ? '240px' : '480px' }) =>
    maxWidth};
  min-width: ${({ minWidth = '120px' }) => minWidth};
  padding: ${({ dense, padding = dense ? '8px' : '16px' }) => padding};
  margin: ${({ margin = '0' }) => margin};
  border: ${({ theme, border = `1px solid ${theme.border.gray}` }) => border};
  border-width: ${({ borderWidth }) => borderWidth};
  border-style: ${({ borderStyle }) => borderStyle};
  border-radius: ${({ borderRadius = '5px' }) => borderRadius};
  background-color: ${({ theme, backgroundColor = theme.mainBackground }) =>
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

  &:disabled {
    background-color: ${({ theme }) => theme.background.disabled};
    color: ${({ theme }) => theme.subText};
  }

  &:read-only,
  &:disabled {
    &:hover,
    &:focus {
      border-color: ${({ theme }) => theme.border.gray};
    }
  }
`;
