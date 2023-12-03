import 'styled-components';
import { ThemeName, Variant } from './style';

declare module 'styled-components' {
  export interface Theme {
    color: T;
  }

  export interface DefaultTheme extends Theme {
    text: string;
    name: ThemeName;
    primaryText: string;
    subText: string;
    grayText: string;
    accentText: string;
    pageBackground: string;
    mainBackground: string;
    sectionBackground: string;
    shadow: {
      100: string;
      200: string;
    };
    selectionBackground: Partial<Record<Variant, string>>;
    hoverBorder: Partial<Record<Variant, string>>;
  }
}
