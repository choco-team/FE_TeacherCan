import styled from 'styled-components';

import theme from '@Styles/theme';

import * as T from './type';

export const BORDER_STYLE = {
  solid: `1px solid ${theme.color.gray[400]}`,
  dashed: `2px dashed ${theme.color.gray[400]}`,
} as const;

export const TextArea = styled.textarea<T.StyledTextArea>`
  width: 100%;
  border: ${(props) => BORDER_STYLE[props.border]};
  padding: 5px;
  font-size: 15px;

  &::placeholder {
    color: ${(props) => props.theme.color.gray[400]};
  }
`;
