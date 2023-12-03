import { RuleSet } from 'styled-components';

import { VARIANT } from '@Constant/style';

export type Variant = (typeof VARIANT)[number];
export type ThemeName = 'light' | 'dark';
export type ThemeStyleSet = Record<ThemeName, RuleSet>;
