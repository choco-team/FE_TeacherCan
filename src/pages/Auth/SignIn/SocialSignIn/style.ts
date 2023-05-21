import styled from 'styled-components';

import { flexCustom } from '@Styles/common';

export const Layout = styled.div`
  ${flexCustom('column', 'center', 'flex-start')}
  row-gap: 20px;
  width: 100%;
`;

export const Title = styled.h6`
  color: ${({ theme }) => theme.color.gray[500]};
  font-size: 1.4rem;
`;

export const ButtonContainer = styled.div`
  ${flexCustom('row', 'center', 'space-evenly')}
  width: 100%;
`;

export const Button = styled.button`
  ${flexCustom('column', 'center', 'center')}
  width: 48px;
  height: 48px;
  font-size: 32px;
`;
