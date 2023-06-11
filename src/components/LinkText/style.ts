import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkText = styled(Link)`
  color: ${({ theme }) => theme.color.gray[500]};
  font-size: 1.4rem;
  text-decoration: underline;
`;
