import styled from 'styled-components';

import theme from '@Styles/theme';

export const Layout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: stretch;
`;

export const Label = styled.label`
  cursor: pointer;
  padding: 1px;
  margin-left: 24px;
  color: ${theme.color.primary[700]};
  font-size: 2.8rem;
  font-weight: bold;
`;

export const RadioBox = styled.input`
  display: none;
`;

export const IconContainer = styled.span`
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  color: ${theme.color.primary[500]};

  img {
    width: 48px;
    height: 48px;
    margin: 8px;
  }
`;
