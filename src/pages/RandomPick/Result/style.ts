import styled from 'styled-components';

import { ResultContainerLayout } from './type';
export const ResultContainer = styled.div<ResultContainerLayout>`
  min-width: 60vw;
  max-width: fit-content;
  padding: 30px;
  background-color: #37710a;
  border: 10px solid #755009;
  color: white;
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
`;
