import styled from 'styled-components';

import theme from '@Styles/theme';

// 설탕쌤이 만드신 input으로 바꿔끼울 수 있을지 보자.
export const CheckBox = styled.input`
  height: 4rem;
  width: 4rem;
  padding: 10px;
  border: 5px solid ${theme.color.primary[500]};
  border-radius: 3px;
  vertical-align: middle;
`;

export const Label = styled.label`
  padding: 1px;
  margin-left: 10px;
  color: ${theme.color.primary[700]};
  font-size: 2.8rem;
  font-weight: bold;
`;

export const Layout = styled.div`
  min-width: 192px;
  display: flex;
  align-items: center;
  margin-right: 32px;
`;
