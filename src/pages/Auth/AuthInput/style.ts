import { BsCheckCircleFill } from 'react-icons/bs';
import styled from 'styled-components';

import { flexCustom } from '@Styles/common';

import * as T from './type';

export const Label = styled.label`
  ${flexCustom('column', 'flex-start', 'flex-start', '8px')}
  width: 100%;
  max-width: 448px;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const AuthInput = styled.input<T.StyledInput>`
  width: 100%;
  height: calc(1.6rem + 36px);
  padding: ${({ type }) =>
    type === 'password' ? '16px 40px 16px 16px' : '16px'};
  border: 1px solid ${({ theme }) => theme.color.gray[300]};
  border-radius: 5px;
  color: ${({ theme }) => theme.color.primary[500]};

  &:hover {
    border-color: ${({ theme }) => theme.color.gray[400]};
  }

  &:focus {
    border-color: ${({ theme }) => theme.color.primary[500]};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.gray[300]};
  }
`;

export const LabelHeader = styled.div`
  ${flexCustom('row', 'center', 'space-between')}
  width: 100%;
`;

export const LabelContent = styled.div`
  ${flexCustom('row', 'flex-start', 'center', '0.5rem')}
`;

export const Required = styled.span`
  color: ${({ theme }) => theme.color.error[500]};
`;

export const EyeButton = styled.button`
  position: absolute;
  right: 16px;
  top: 50%;
  color: ${({ theme }) => theme.color.primary[500]};
  line-height: 0;
  transform: translateY(-50%);
`;

export const ValidationMessage = styled.div`
  color: ${({ theme }) => theme.color.error[500]};
  font-size: 1.4rem;
`;

export const CheckIcon = styled(BsCheckCircleFill)`
  color: ${({ theme }) => theme.color.success[500]};
  font-size: 1.4rem;
`;
