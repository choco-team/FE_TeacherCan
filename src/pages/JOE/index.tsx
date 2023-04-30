import { Button, Input } from './style';

const Joe = ({ text }: { text: string }) => {
  return (
    <>
      <Input></Input>
      <Button>{text}</Button>
    </>
  );
};

export default Joe;
