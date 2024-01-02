import { ReactNode, HTMLAttributes } from 'react';
import styled from 'styled-components';

import Button from '@Components/Button';

import { flexCustom } from '@Styles/common';
import theme from '@Styles/theme';

type RandomResultLayoutProps = {
  backgroundImage: string;
};

export const Layout = styled.div`
  ${flexCustom('column', 'center', 'center')}
  width: 100%;
  height: 100%;
`;

export const RandomResult = styled.div<RandomResultLayoutProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 96%;
  aspect-ratio: 5/3;
  margin: auto;
  border-radius: 10px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: burlywood;
`;

export const ChoosedComponentsContainer = styled.div`
  ${flexCustom('row', 'center', 'flex-start')}
  width: 100%;
  max-width: 720px;
  border: 3px solid ${theme.color.primary};
  border-radius: 3px;
  margin: 20px 0 20px 0;
  padding: 16px;
`;

type SelectBackgroundButtonWrapperProps = HTMLAttributes<HTMLDivElement> & {
  alignItems?: string;
  justifyContent?: string;
  children?: ReactNode;
};

type ResultWrapperProps = {
  color: string;
};

export const SelectBackgroundButtonWrapper = styled.div<SelectBackgroundButtonWrapperProps>`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  display: flex;
  justify-content: flex-end;
`;

export const BackgroundButtonContainer = styled.div`
  ${flexCustom('row', 'center', 'center')}
`;

type backgroundButtonProps = {
  backgroundColor: string;
  hoverBackground: string;
  textColor: string;
  media: string;
};

export const WoodBackgroundButton = styled(Button)<backgroundButtonProps>`
  ${flexCustom('row', 'center', 'center')}
  width: ${(props) => (props.media === 'tablet' ? '20px' : '28px')};
  margin: 12px 12px 8px 0px;
  border-radius: 50%;
  padding: 0px;
  background-color: ${(props) => props.backgroundColor};
  border-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  &:hover {
    background-color: ${(props) => props.hoverBackground};
  }

  &:active {
    background-color: ${(props) => props.hoverBackground};
  }
  font-size: ${(props) => (props.media === 'tablet' ? 'smaller' : 'large')};
`;

export const ResultWrapper = styled.div<ResultWrapperProps>`
  color: ${(props) => props.color};
  font-weight: bold;
  font-size: 3rem;
  margin-bottom: 16px;
  text-align: center;
`;

type ResultSpanProps = {
  media: string;
};

export const ResultSpan = styled.span<ResultSpanProps>`
  display: inline-block;
  text-align: center;
  font-size: 3.6rem;
  max-width: 840px;
  word-break: break-all;
  font-size: ${(props) => (props.media === 'tablet' ? 'large' : {})};
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  display: flex;
  gap: 10px;

  margin: 10px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;
