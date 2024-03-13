import styled from 'styled-components';

import theme from '@Styles/theme';

export const Layout = styled.div`
  display: grid;
  gap: 24px;
`;

export const ModalTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${theme.color.primary[500]};
`;

export const SettingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SettingType = styled.span`
  font-weight: 500;
`;

export const SelectContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

export const RecentTimes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const BottomButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;

  margin-top: 10px;
`;
