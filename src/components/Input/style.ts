import styled from 'styled-components';

export const Input = styled.input`
  padding: 8px;
  color: ${({ color }) =>
    ({ basic: '#23235F', accent: '#f48d8d' }[color || 'basic'])};
  border: 1px solid #b5b5b5;
  border-radius: 3px;

  &:focus {
    border: 1px solid #f48d8d;
  }
`;
