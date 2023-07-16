import styled from 'styled-components';

import { flexCustom } from '@Styles/common';
export const RandomPickLayout = styled.div`
  ${flexCustom('column', 'center', 'center')}
  width: 90%;
  background-color: ${(props) => props.theme.background.gray};
  margin-top: 10%;
  border-radius: 10px;
  margin-left: 10%;
  margin-right: 10%;
`;
