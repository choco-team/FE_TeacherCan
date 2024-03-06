import { css, styled } from 'styled-components';

import theme from '@Styles/theme';

import { ThemeStyleSet } from '@Types/style';

export const Select = styled.div`
  max-width: 100%;

  &label {
    width: 100%;
  }
`;

const LABEL_TEXT_THEME: ThemeStyleSet = {
  light: css`
    color: ${theme.color.gray[500]};
  `,

  dark: css`
    color: ${theme.color.gray[300]};
  `,
};

export const LabelText = styled.p`
  margin-bottom: 4px;

  font-size: 1.5rem;

  ${({ theme }) => LABEL_TEXT_THEME[theme.name]}
`;

type InputLayoutProps = {
  $isFocus: boolean;
};

const INPUT_LAYOUT_THEME: ThemeStyleSet = {
  light: css`
    background-color: ${theme.color.gray[100]};
  `,

  dark: css`
    background-color: ${theme.color.gray[700]};
  `,
};

export const InputLayout = styled.div<InputLayoutProps>`
  display: flex;
  align-items: center;

  padding: 10px 16px;

  border-radius: 12px;

  cursor: pointer;

  ${({ theme }) => INPUT_LAYOUT_THEME[theme.name]}
`;

const INPUT_THEME: ThemeStyleSet = {
  light: css`
    color: ${theme.color.gray[900]};
    background-color: ${theme.color.gray[100]};
  `,

  dark: css`
    color: ${theme.color.gray[100]};
    background-color: ${theme.color.gray[700]};
  `,
};

export const Input = styled.input`
  outline: none;
  border: none;

  width: 100%;

  color: ${theme.color.gray[900]};
  background-color: ${theme.color.gray[100]};

  font-size: 1.5rem;

  cursor: pointer;

  ${({ theme }) => INPUT_THEME[theme.name]}
`;

type OptionsProps = {
  top: string;
  width: string;
};

const OPTIONS_THEME: ThemeStyleSet = {
  light: css`
    border: 1px solid ${theme.color.gray[300]};
    background-color: ${theme.color.white};

    color: ${theme.color.black};
  `,

  dark: css`
    border: 1px solid ${theme.color.gray[700]};
    background-color: ${theme.color.gray[900]};

    color: ${theme.color.white};
  `,
};

export const Options = styled.ul<OptionsProps>`
  position: absolute;
  top: ${({ top }) => top};

  display: flex;
  flex-direction: column;
  gap: 8px;

  width: ${({ width }) => width};
  max-height: 320px;
  overflow-y: scroll;

  padding: 10px;

  border: 1px solid ${theme.color.gray[300]};
  border-radius: 8px;

  z-index: 15;

  ${({ theme }) => OPTIONS_THEME[theme.name]}
`;

type OptionProps = {
  $isSelected: boolean;
};

const OPTION_THEME: ThemeStyleSet = {
  light: css`
    background-color: ${theme.color.gray[100]};
  `,

  dark: css`
    background-color: ${theme.color.gray[800]};
  `,
};

export const Option = styled.li<OptionProps>`
  padding: 10px 16px;

  border-radius: 8px;

  font-size: 1.5rem;

  cursor: pointer;

  ${({ $isSelected, theme }) =>
    $isSelected
      ? css`
          background-color: ${theme.color.primary[500]};
          color: white;
        `
      : css`
          &:hover {
            ${OPTION_THEME[theme.name]}
          }
        `}
`;
