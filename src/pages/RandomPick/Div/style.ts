import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface DivProps extends HTMLAttributes<HTMLDivElement> {
  alignItems?: string;
  justifyContent?: string;
}

export const Div = styled.div<DivProps>`
  display: flex;
  align-items: ${(props) => props.alignItems || 'flex-start'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  width: 100%;
  padding: 0;
  margin-left: 0;
`;
