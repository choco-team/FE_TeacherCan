import 'styled-components';
import { Variant } from './style';

declare module 'styled-components' {
  export interface Theme {
    color: T;
  }

  export interface DefaultTheme extends Theme {
    text: string;
    subText: string;
    background: Partial<Variant, string>;
    border: Partial<Variant, string>;
    activeBackground: Partial<Variant, string>;
    hoverBackground: Partial<Variant, string>;
  }
}
