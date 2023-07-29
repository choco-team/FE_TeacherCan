import styled from 'styled-components';

import theme from '@Styles/theme';

export const Layout = styled.div`
  display: grid;

  padding: 40px;
  border-radius: 12px;

  background-color: ${theme.color.gray[50]};
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Name = styled.div`
  font-size: 2.4rem;
`;

export const Allergies = styled.div`
  color: ${theme.color.gray[400]};
`;
