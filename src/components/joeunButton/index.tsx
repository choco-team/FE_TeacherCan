import styled from 'styled-components';

type ButtonType = {
  backgroundColor: string;
};

const Button = styled.button<ButtonType>`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 5px;
`;

type JoeunBtnProps = {
  text: string;
  backgroundColor: string;
};

const JoeunBtn = ({ text, backgroundColor }: JoeunBtnProps) => {
  return <Button backgroundColor={backgroundColor}>{text}</Button>;
};

export default JoeunBtn;
