import styled from 'styled-components';

import { BorderedButton, Button as _Button, flexCustom } from '@Styles/common';

export const Container = styled.div`
  ${flexCustom('column', 'center', 'flex-start')}
`;

export const Title = styled.h1`
  font-size: 3.2rem;
`;

export const Button = styled(_Button)`
  margin: 12px 0;
`;

export const BigButton = styled(BorderedButton)`
  font-size: 2.8rem;
`;
