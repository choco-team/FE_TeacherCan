import styled from 'styled-components';

import { flexCustom } from '@Styles/common';

export const Layout = styled.div`
  ${flexCustom('column', 'center', 'flex-start')}
  max-width: 448px;
  margin: auto;
`;

export const Form = styled.form`
  ${flexCustom('column', 'center', 'flex-start')}
  row-gap: 32px;
  width: 100%;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 16px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.color.primary[500]};
  color: ${({ theme }) => theme.color.white};
  font-weight: 600;
`;

export const LinkContainer = styled.div`
  ${flexCustom('row', 'flex-start', 'space-between')}
  width: 100%;
  margin: 16px 0 48px;
`;
