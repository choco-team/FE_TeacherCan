import styled from 'styled-components';

import * as GlobalStyle from '@Styles/common';

type ButtonType = {
  backgroundColor: string;
};

const Button = styled(GlobalStyle.Button)<ButtonType>`
  background-color: ${(props) => props.backgroundColor};
  :active {
    background-color: pink;
  }
`;

type HDButtonProps = {
  text: string;
  backgroundColor: string;
};

function HDButton({ text, backgroundColor }: HDButtonProps) {
  return <Button backgroundColor={backgroundColor}>{text}</Button>;
}

export default HDButton;
