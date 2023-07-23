import { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

import Button from '@Components/Button';

import { flexCustom } from '@Styles/common';

interface StyledConditionBoxProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  disableCursor?: boolean;
  marginRight?: string;
  marginLeft?: string;
}

const StyledConditionBox = styled(Button)<StyledConditionBoxProps>`
  ${flexCustom('row', 'center', 'space-between')}
  ${({ disableCursor }) =>
    disableCursor &&
    css`
      cursor: not-allowed;
      pointer-events: none;
    `}

  &:hover {
    background-color: ${(props) =>
      props.theme.background[props.variant || 'primary']};
  }
  min-width: 140px;
  min-height: 50px;
  box-shadow: 2px 2px ${(props) => props.theme.color.gray[400]};
  font-size: 1.8rem;
  margin-right: ${(props) => props.marginRight};
  margin-left: ${(props) => props.marginLeft};
  padding-bottom: 0;
`;

export const Layout = styled.div`
  height: auto;
  display: flex;
  justify-content: space-around;
`;

export const IconWrapper = styled.div`
  margin-right: 1rem;
`;

export default StyledConditionBox;
