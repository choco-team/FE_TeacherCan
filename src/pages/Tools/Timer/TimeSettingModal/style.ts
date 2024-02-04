import styled, { RuleSet, css } from 'styled-components';

import theme from '@Styles/theme';

import { ThemeName } from '@Types/style';

export const Layout = styled.div`
  display: grid;
  gap: 20px;
`;

export const ModalTitle = styled.h2`
  justify-self: center;

  font-size: 1.8rem;
  font-weight: 600;
  color: ${theme.color.primary[500]};
`;

export const ModalDescription = styled.p`
  color: ${(props) => props.theme.grayText};
  line-height: 140%;
`;

export const InputLabel = styled.label`
  display: grid;
  grid-template-columns: 140px 1fr;
`;

export const InputLabelText = styled.span`
  font-weight: 500;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  input {
    width: 120px;
  }
`;

export const TimerButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

export const BottomButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;

  margin-top: 10px;
`;

const RECENT_TIMER_THEME: Record<ThemeName, RuleSet> = {
  light: css`
    .recent-timer {
      &:hover {
        background-color: ${theme.color.gray[200]};
      }
    }
  `,

  dark: css`
    .recent-timer {
      &:hover {
        background-color: ${theme.color.gray[700]};
      }
    }
  `,
};

export const RecentTimer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: flex-start;

  gap: 10px;

  .recent-timer {
    padding: 2px 6px;
    border-radius: 5px;

    cursor: pointer;

    transition: background-color 0.2s ease;
  }

  .empty-message {
    grid-column: 1 / -1;

    color: ${(props) => props.theme.grayText};
  }

  ${({ theme }) => RECENT_TIMER_THEME[theme.name]}
`;
