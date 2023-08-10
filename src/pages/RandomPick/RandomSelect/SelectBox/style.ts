import styled from 'styled-components';

import { flexCustom } from '@Styles/common';

export const Layout = styled.div`
  height: auto;
  display: flex;
  justify-content: space-around;
`;

export const IconWrapper = styled.div`
  margin-right: 1rem;
`;

type SelectBoxProps = {
  marginRight?: string;
  marginLeft?: string;
};

export const SelectBox = styled.div<SelectBoxProps>`
  ${flexCustom('row', 'center', 'space-between')}

  background-color:${(props) => props.theme.color.gray[400]};
  min-width: 140px;
  min-height: 50px;
  box-shadow: 2px 2px ${(props) => props.theme.color.gray[500]};
  margin-right: ${(props) => props.marginRight};
  margin-left: ${(props) => props.marginLeft};
  border-radius: 3px;
  padding: 0.8rem 1.2rem 0rem 1.2rem;
  color: ${(props) => props.theme.primaryText};
  font-size: 1.8rem;
  font-weight: 600;
`;
