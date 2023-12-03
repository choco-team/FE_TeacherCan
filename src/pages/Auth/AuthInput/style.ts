import { BsCheckCircleFill } from 'react-icons/bs';
import styled, { css } from 'styled-components';

import Input from '@Components/Input';

import { flexCustom } from '@Styles/common';
import theme from '@Styles/theme';

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

export const AuthInput = styled(Input)<T.StyledInput>`
  height: calc(1.6rem + 36px);
  padding: ${({ type }) =>
    type === 'password' ? '16px 40px 16px 16px' : '16px'};
  color: ${theme.color.primary[500]};
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
  color: ${theme.color.primary[500]};
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

export const DoubleCheckEmail = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  font-weight: 400;
  font-size: 1.4rem;
  color: ${(props) => props.theme.accentText};

  position: absolute;
  right: 16px;
  top: 50%;
  color: ${theme.color.primary[500]};
  line-height: 0;
  transform: translateY(-50%);

  cursor: pointer;
`;

export const DoubleCheckIcon = styled.div<{ isCheckedEmail?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 16px;
  height: 16px;
  border-radius: 50%;

  color: white;

  ${({ theme, isCheckedEmail }) => css`
    background-color: ${isCheckedEmail
      ? theme.color.success[600]
      : theme.color.error[500]};
  `}
`;
