import styled from 'styled-components';

import * as T from './type';

export const MemoDiv = styled.div<T.StyledMemoDiv>`
  width: 500px;
  height: 150px;
  border: 2px solid ${(props) => props.bordercolor};
  border-radius: 20px;
  font-weight: ${(props) => props.fontweight};
  text-align: center;
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
