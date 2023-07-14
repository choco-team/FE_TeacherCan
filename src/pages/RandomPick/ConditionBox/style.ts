import { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

import Button from '@Components/Button';

import { flexCustom } from '@Styles/common';

interface StyledConditionBoxProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  disableCursor?: boolean;
}

const StyledConditionBox = styled(Button)<StyledConditionBoxProps>`
  ${flexCustom('row', 'center', 'space-between')}
  ${({ disableCursor }) =>
    disableCursor &&
    css`
      cursor: not-allowed;
      pointer-events: none;
    `}
  /* pointer-events: none;
  cursor: not-allowed; */
  &:hover {
    background-color: ${(props) =>
      props.theme.background[props.variant || 'primary']};
  }
  min-width: 140px;
  min-height: 50px;
  box-shadow: 2px 2px ${(props) => props.theme.color.gray[400]};
  font-size: 2.2rem;
  margin-right: 2vw;
`;

export const Layout = styled.div`
  height: auto;
  display: flex;
  justify-content: space-around;
`;

export const IconWrapper = styled.div`
  margin-right: 1rem; /* Adjust the margin value as needed */
`;

export default StyledConditionBox;
