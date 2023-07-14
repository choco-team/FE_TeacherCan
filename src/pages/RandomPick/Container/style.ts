import styled from 'styled-components';

import { flexCustom } from '@Styles/common';
import theme from '@Styles/theme';

export const Container = styled.div`
  ${flexCustom('row', 'center', 'flex-end')}
  width: 40vw;
  height: 10vh;
  border: 3px solid ${theme.color.primary[500]};
  border-radius: 3px;
  margin-top: 20px;
`;
