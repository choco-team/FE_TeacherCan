import { Button } from '@Styles/common';

export type AgeType = 25 | 28 | 30 | 32;

const Name = ({ name, age }: { name: string; age: AgeType }) => {
  return (
    <Button>
      {name} {age}
    </Button>
  );
};

export default Name;
