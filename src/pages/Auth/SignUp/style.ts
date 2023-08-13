import styled from 'styled-components';

import Button from '@Components/Button';

import { flexCustom } from '@Styles/common';

export const Layout = styled.div`
  ${flexCustom('column', 'center', 'flex-start')}
  width: 100%;
  max-width: 448px;
  margin: auto;
`;

export const Heading = styled.h1`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.color.primary[500]};
  font-size: 3.6rem;
  font-weight: 700;
`;

export const Description = styled.div`
  margin-bottom: 32px;
  color: ${({ theme }) => theme.color.gray[400]};
`;

export const Form = styled.form`
  ${flexCustom('column', 'center', 'flex-start')}
  row-gap: 32px;
  width: 100%;
`;

export const SubmitButton = styled(Button)`
  padding: 16px;
  margin-bottom: 16px;
  border-radius: calc((1.6rem + 16px));

  height: 53px;
`;
