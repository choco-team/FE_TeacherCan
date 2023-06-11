import styled from 'styled-components';

import { flexCustom } from '@Styles/common';

export const Layout = styled.div`
  ${flexCustom('column', 'center', 'flex-start')}
  width: 100%;
  max-width: 448px;
  margin: auto;
`;

export const Heading = styled.h1`
  align-self: flex-start;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.color.primary[500]};
  font-size: 3.6rem;
  font-weight: 700;
`;

export const Description = styled.div`
  align-self: flex-start;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.color.gray[400]};
`;

export const Form = styled.form`
  ${flexCustom('column', 'center', 'flex-start')}
  row-gap: 32px;
  width: 100%;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.color.primary[500]};
  color: ${({ theme }) => theme.color.white};
  font-weight: 600;

  &:hover {
    background-color: ${({ theme }) => theme.color.primary[700]};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.primary[800]};
  }
`;

export const LinkText = styled;
