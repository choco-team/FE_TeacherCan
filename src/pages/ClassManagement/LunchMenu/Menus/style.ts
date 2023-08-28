import styled from 'styled-components';

import { TextSkeletonStyle } from '@Styles/skeleton';
import theme from '@Styles/theme';

type LoadingProps = {
  isLoading?: boolean;
};

export const Layout = styled.div<LoadingProps>`
  display: flex;
  flex-direction: column;

  gap: 10px;
`;

type DateProps = {
  isToday: boolean;
};

export const Date = styled.div<DateProps>`
  color: ${(props) =>
    props.isToday ? props.theme.accentText : props.theme.color};
  font-weight: 600;
`;

export const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  padding: 25px;
  border-radius: 8px;

  box-shadow: ${(props) => props.theme.shadow[100]};

  background-color: ${theme.color.gray[50]};
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5px;
`;

export const Name = styled.div<LoadingProps>`
  font-size: 1.8rem;

  ${(props) => props.isLoading && TextSkeletonStyle}
`;

export const Allergies = styled.div`
  color: ${theme.color.gray[400]};
`;

export const NoLunch = styled.span`
  color: ${(props) => props.theme.grayText};
`;
