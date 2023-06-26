import styled from 'styled-components';

import { flexCustom } from '@Styles/common';

export const Layout = styled.div`
  ${flexCustom('row', 'center', 'center', '10px')}

  border-radius: 20px;
  background-color: ${(props) => props.theme.background.orange};
  color: ${(props) => props.theme.primaryText};
  font-weight: 600;
  padding: 10px 30px;
`;

export const VacationDate = styled.div``;
