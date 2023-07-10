import styled from 'styled-components';

import Button from '@Components/Button';

import ConditionBox from './type';

const StyledConditionBox = styled(Button)<ConditionBox>`
  pointer-events: none;
  cursor: not-allowed;
  &:hover {
    background-color: ${(props) =>
      props.theme.background[props.variant || 'primary']};
  }
  min-width: 13rem;
  box-shadow: 2px 2px ${(props) => props.theme.color.gray[400]};
`;

export const Layout = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default StyledConditionBox;
