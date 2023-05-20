import styled from 'styled-components';

import { flexCustom } from '@Styles/common';

import * as T from './type';

export const Label = styled.label`
  ${flexCustom('column', 'flex-start', 'flex-start')}
  row-gap: 8px;
  width: 100%;
  max-width: 448px;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input<T.StyledInput>`
  width: 100%;
  padding: ${({ type }) => (type === 'email' ? '16px' : '16px 40px 16px 16px')};
  border: 1px solid ${({ theme }) => theme.color.gray[300]};
  border-radius: 3px;
  color: ${({ theme }) => theme.color.primary[500]};

  &::placeholder {
    color: ${({ theme }) => theme.color.gray[300]};
  }
`;

export const EyeButton = styled.button`
  position: absolute;
  right: 16px;
  top: 50%;
  color: ${({ theme }) => theme.color.primary[500]};
  line-height: 0;
  transform: translateY(-50%);
`;
