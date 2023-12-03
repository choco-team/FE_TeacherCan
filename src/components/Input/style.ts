import styled, { css } from 'styled-components';

import { INPUT_THEME } from './constant';
import * as T from './type';

export const Input = styled.input<T.StyledInput>`
  ${({
    theme,
    width = '100%',
    $size,
    maxWidth = $size === 'sm' ? '240px' : '480px',
    minWidth = '120px',
    dense,
    padding = dense ? '8px' : '16px',
    borderRadius = '5px',
    fontSize = $size === 'sm' ? '1.4rem' : 'inherit',
  }) => css`
    width: ${width};
    max-width: ${maxWidth};
    min-width: ${minWidth};
    padding: ${padding};
    border-radius: ${borderRadius};
    background-color: ${theme.mainBackground};
    color: ${theme.text};
    font-size: ${fontSize};

    ${INPUT_THEME[theme.name]};
  `}
`;
