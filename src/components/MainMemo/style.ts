import styled from 'styled-components';

import * as T from './type';

export const Div = styled.div<T.MemoTitle>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: 20px;
  font-weight: bolder;
`;
