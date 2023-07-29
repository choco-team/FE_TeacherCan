import styled from 'styled-components';

import theme from '@Styles/theme';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Title = styled.div`
  background-color: ${theme.color.white};

  padding: 20px;
  border-radius: 16px;

  text-align: center;
  font-size: 2rem;
`;

export const Students = styled.div`
  display: grid;
  row-gap: 20px;
`;

export const StudentWrapper = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;

  font-size: 2rem;
`;

export const Allergies = styled.div`
  color: ${theme.color.gray[400]};
`;
