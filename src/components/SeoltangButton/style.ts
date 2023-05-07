import styled from 'styled-components';

import { Button as _Button } from '@Styles/common';

import * as T from './type';

export const SeoltangButton = styled(_Button)<T.StyledSeoltangButton>`
  background-color: ${({ backgroundColor }) => backgroundColor};

  &:active {
    background-color: ${({ backgroundColor }) => backgroundColor};
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
  }
`;
