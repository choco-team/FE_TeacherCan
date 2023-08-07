import { CSSProperties } from 'react';
import styled, { css } from 'styled-components';

import theme from './theme';

// color hex 6자리 뒤에 붙여서 opacity 조절 (opacity: 0 ~ 1)
export const getHexOpacity = (opacity: number) => {
  const alpha = Math.round(opacity * 255);
  const hex = (alpha + 0x10000).toString(16).slice(-2).toUpperCase();
  return hex;
};

export const flexCustom = (
  flexDirection: CSSProperties['flexDirection'],
  alignItems: CSSProperties['alignItems'],
  justifyContent: CSSProperties['justifyContent'],
  gap?: CSSProperties['gap'],
) => css`
  display: flex;
  flex-direction: ${flexDirection};
  align-items: ${alignItems};
  justify-content: ${justifyContent};
  gap: ${gap};
`;

export const H1 = styled.h1`
  color: ${theme.color.gray};
  font-weight: 500;
`;
