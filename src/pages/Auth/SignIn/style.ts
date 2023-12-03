import styled from 'styled-components';

import Button from '@Components/Button';

import { flexCustom } from '@Styles/common';

export const Layout = styled.div`
  ${flexCustom('column', 'center', 'flex-start')}
  width: 100%;
  max-width: 448px;
  margin: auto;
`;

export const Form = styled.form`
  ${flexCustom('column', 'center', 'flex-start')}
  row-gap: 32px;
  width: 100%;
`;

export const SubmitButton = styled(Button)`
  padding: 16px;
  border-radius: calc((1.6rem + 16px));

  height: 53px;
  width: 100%;
`;

export const LinkContainer = styled.div`
  ${flexCustom('row', 'flex-start', 'space-between')}
  width: 100%;
  margin: 16px 0 48px;
`;
