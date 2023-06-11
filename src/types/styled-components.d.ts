import 'styled-components';
import { Variant } from './style';

declare module 'styled-components' {
  export interface Theme {
    color: T;
  }

  export interface DefaultTheme extends Theme {
    text: string;
    subText: string;
    accentText: string;
    pageBackground: string;
    background: Record<Variant, string>;
    border: Record<Variant, string>;
    activeBackground: Record<Variant, string>;
    hoverBackground: Record<Variant, string>;
  }
}
