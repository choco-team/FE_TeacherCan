import { ComponentPropsWithoutRef } from 'react';
import { Variant } from 'src/types/style';
import { RuleSet } from 'styled-components';

type ButtonSize = 'sm' | 'md' | 'lg' | 'wide';
type ButtonConcept = 'text' | 'contained' | 'outlined';

type Button = {
  variant?: Variant;
  concept?: ButtonConcept;
  size?: ButtonSize;
  $style?: RuleSet;
} & ComponentPropsWithoutRef<'button'>;

type StyledButton = Required<
  Pick<Button, 'variant' | 'concept' | 'size' | '$style'>
>;

export type { Button, StyledButton, ButtonSize };
