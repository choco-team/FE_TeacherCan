import styled from 'styled-components';

import * as T from './type';

export const TextArea = styled.textarea<T.StyledTextArea>`
  width: ${(props) => props.width}
  height: ${(props) => props.height};
  padding: 10px;
  border: ${(props) => props.border};
`;
