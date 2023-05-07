import styled from 'styled-components';

import * as T from './type';

export const Button = styled.button<T.StyledButton>`
  background-color: ${(props) => props.backgroundColor};
`;
