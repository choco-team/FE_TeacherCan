import styled, { css } from 'styled-components';

import theme from '@Styles/theme';

import { TEXTAREA_THEME } from './constant';
import * as T from './type';

export const BORDER_STYLE = {
  solid: `1px solid ${theme.color.gray[400]}`,
  dashed: `2px dashed ${theme.color.gray[400]}`,
} as const;

export const TextArea = styled.textarea<T.StyledTextArea>`
  ${({
    theme,
    width = '100%',
    $size,
    maxWidth = $size === 'sm' ? '240px' : '480px',
    minWidth = '120px',
    dense,
    padding = dense ? '8px' : '16px',
    borderWidth,
    borderStyle,
    borderRadius,
    fontSize = $size === 'sm' ? '1.4rem' : 'inherit',
  }) => css`
    ${TEXTAREA_THEME[theme.name]}

    width: ${width};
    max-width: ${maxWidth};
    min-width: ${minWidth};
    padding: ${padding};
    border-width: ${borderWidth};
    border-style: ${borderStyle};
    border-radius: ${borderRadius};
    background-color: ${theme.mainBackground};
    color: ${theme.text};
    font-size: ${fontSize};
  `}
`;
