import styled from 'styled-components';

import theme from '@Styles/theme';

export const RadioBox = styled.input`
  appearance: auto;
  padding: 10px;
  border: 5px solid ${theme.color.primary[500]};
  border-radius: 3px;
  vertical-align: middle;
  color: ${theme.color.primary[500]};
`;

export const Label = styled.label`
  padding: 1px;
  margin-left: 24px;
  color: ${theme.color.primary[700]};
  font-size: 2.8rem;
  font-weight: bold;
`;

export const Layout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const IconContainer = styled.span`
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  margin-right: 8px;
  color: ${theme.color.primary[500]};
`;
