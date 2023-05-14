import 'styled-components';
import { Variant } from './style';

declare module 'styled-components' {
  export interface DefaultTheme {
    text: string;
    background: Partial<Variant, string>;
    border: Partial<Variant, string>;
  }
}
