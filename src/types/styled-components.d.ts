import 'styled-components';
import { Variant } from './style';

declare module 'styled-components' {
  export interface Theme {
    color: T;
  }

  export interface DefaultTheme extends Theme {
    text: string;
    primaryText: string;
    subText: string;
    accentText: string;
    pageBackground: string;
    shadow: string;
    background: Partial<Record<Variant, string>> & {
      disabled?: string;
      orange?: string;
    };
    border: Partial<Record<Variant, string>>;
    activeBackground: Partial<Record<Variant, string>>;
    hoverBackground: Partial<Record<Variant, string>>;
    hoverBorder: Partial<Record<Variant, string>>;
  }
}
