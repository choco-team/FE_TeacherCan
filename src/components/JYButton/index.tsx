import styled from 'styled-components';

type ButtonType = {
  backgroundColor: string;
};

const Button = styled.button<ButtonType>`
  background-color: ${(props) => props.backgroundColor};
`;

type JYButtonProps = {
  text: string;
  backgroundColor: string;
};

function JYButton({ text, backgroundColor }: JYButtonProps) {
  return <Button backgroundColor={backgroundColor}>{text}</Button>;
}

export default JYButton;
