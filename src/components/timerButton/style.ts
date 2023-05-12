import styled from 'styled-components';

import * as T from './type';

export const TimerBtn = styled.button<T.TimerBtn>`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 10px;
  padding: 7px;
`;
