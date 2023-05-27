import styled from 'styled-components';

import * as T from './type';

export const TextArea = styled.textarea<T.StyledTextArea>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
  padding: 5px;
  color: ${(props) => props.color};
  font-size: 15px;
`;
