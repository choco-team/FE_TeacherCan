import styled, { css } from 'styled-components';

import { getHexOpacity } from '@Styles/common';

import { SIZE, VARIANT } from './constant';
import type { StyledButton } from './type';

export const Button = styled.button<StyledButton>`
  text-align: center;
  word-break: keep-all;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;

  ${({ size, $style, concept, variant, theme }) => css`
    border: 1px solid
      ${concept === 'text' ? 'transparent' : VARIANT.border[variant]};

    background-color: ${concept === 'contained'
      ? VARIANT.background[variant]
      : 'transparent'};

    color: ${concept === 'contained'
      ? theme.primaryText
      : VARIANT.background[variant]};

    &:hover {
      background-color: ${concept === 'contained'
        ? VARIANT.hoverBackground[variant]
        : `${theme.color.gray[500]}${getHexOpacity(0.05)}`};

      border-color: ${concept === 'outlined' &&
      VARIANT.hoverBackground[variant]};

      color: ${concept !== 'contained' && VARIANT.hoverBackground[variant]};
    }

    &:active {
      background-color: ${concept === 'contained'
        ? VARIANT.activeBackground[variant]
        : `${theme.color.gray[500]}${getHexOpacity(0.1)}`};

      border-color: ${concept === 'outlined' &&
      VARIANT.activeBackground[variant]};

      color: ${concept !== 'contained' && VARIANT.activeBackground[variant]};
    }

    &:disabled {
      background-color: ${theme.color.gray[300]};
      border-color: ${theme.color.gray[300]};
      cursor: not-allowed;
    }

    ${SIZE[size]}
    ${$style}
  `};
`;
