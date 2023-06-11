import styled from 'styled-components';

import * as T from './type';

export const VacationDateItem = styled.span<T.VacationDateItem>`
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.theme.text};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  padding: 5px 30px;
`;
