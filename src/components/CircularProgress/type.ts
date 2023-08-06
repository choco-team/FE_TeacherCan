import { CSSProp } from 'styled-components';

export const SIZE = {
  'x-small': '1.6rem',
  small: '2.0rem',
  medium: '2.4rem',
  large: '2.8rem',
  'x-large': '3.2rem',
} as const;

type Props = {
  size?: keyof typeof SIZE;
  $style?: CSSProp;
};

export type { Props };
