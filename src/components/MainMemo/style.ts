import styled from 'styled-components';

import { flexCustom } from '@Styles/common';

import * as T from './type';

export const Div = styled.div<T.MemoDiv>`
  ${flexCustom('column', 'center', 'center')}
  width: 400px;
  height: 400px;
  font-size: 20px;
  font-weight: bolder;
`;
