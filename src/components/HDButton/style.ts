import styled from 'styled-components';

import { Button as _Button } from '@Styles/common';

import * as T from './type';

export const Button = styled(_Button)<T.StyledButton>`
  background-color: ${(props) => props.backgroundColor};
  :active {
    background-color: pink;
  }
`;
