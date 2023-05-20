import styled from 'styled-components';

import * as T from './type';

export const TextArea = styled.textarea<T.StyledTextArea>`
  border: ${(props) => props.border};
  width: 350px;
  height: 130px;
  padding: 10px;
`;
