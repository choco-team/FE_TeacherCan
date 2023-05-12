import styled from 'styled-components';

import * as T from './type';

export const Div = styled.div<T.Div>`
  border: 2px solid black;
  border-radius: 20px;
  font-weight: bold;
  height: 150px;
  text-align: center;
  width: 500px;
`;

export const P1 = styled.p`
  margin-top: 20px;
`;

export const P2 = styled.p`
  margin-top: 20px;
  font-size: 13px;
`;

export const Li = styled.li`
  margin-top: 15px;
  font-size: 12px;
  color: red;
`;
