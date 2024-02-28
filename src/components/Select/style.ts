import { css, styled } from 'styled-components';

import theme from '@Styles/theme';

export const Select = styled.div`
  max-width: 100%;

  &label {
    width: 100%;
  }
`;

export const LabelText = styled.p`
  margin-bottom: 4px;

  font-size: 1.5rem;
  color: ${theme.color.gray[500]};
`;

type InputLayoutProps = {
  $isFocus: boolean;
};

export const InputLayout = styled.div<InputLayoutProps>`
  display: flex;
  align-items: center;

  padding: 10px 16px;

  border-radius: 12px;

  background-color: ${theme.color.gray[100]};

  cursor: pointer;
`;

export const Input = styled.input`
  outline: none;
  border: none;

  width: 100%;

  color: ${theme.color.gray[900]};
  background-color: ${theme.color.gray[100]};

  font-size: 1.5rem;

  cursor: pointer;
`;

type OptionsProps = {
  top: string;
  width: string;
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

  background-color: ${theme.color.white};

  z-index: 15;
`;

type OptionProps = {
  $isSelected: boolean;
};

export const Option = styled.li<OptionProps>`
  padding: 10px 16px;

  border-radius: 8px;

  font-size: 1.5rem;

  cursor: pointer;

  ${({ $isSelected }) =>
    $isSelected
      ? css`
          background-color: ${theme.color.primary[500]};
          color: white;
        `
      : css`
          &:hover {
            background-color: ${theme.color.gray[100]};
          }
        `}
`;
