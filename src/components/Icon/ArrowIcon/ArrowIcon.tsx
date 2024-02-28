import { ComponentPropsWithoutRef } from 'react';

type Direction = 'down' | 'up' | 'left' | 'right';

type ArrowIconProps = {
  color?: string;
  direction: Direction;
};

const DIRECTION: Record<Direction, string> = {
  down: 'M11.6667 16.6667L20 25.0001L28.3333 16.6667',
  up: 'M28.3333 23.3333L20 15L11.6667 23.3333',
  left: 'M23.3333 11.6667L15 20.0001L23.3333 28.3334',
  right: 'M16.6667 28.3334L25 20.0001L16.6667 11.6667',
};

const ArrowIcon = ({
  color = 'black',
  direction,
  ...rest
}: ArrowIconProps & ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 40 40"
      fill={color}
      {...rest}
    >
      <path
        d={DIRECTION[direction]}
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;
