import type { Meta, StoryObj } from '@storybook/react';

import { VARIANT } from '@Constant/style';

import HDButton from '.';

type Story = StoryObj<typeof HDButton>;

/**
 * `HDButton` 컴포넌트는 연습 버튼 컴포넌트입니다.
 */
const meta: Meta<typeof HDButton> = {
  title: 'HDButton',
  component: HDButton,
  argTypes: {
    variant: {
      options: VARIANT,
      control: { type: 'radio' },
    },
  },
};

export default meta;

export const PrimaryButton: Story = {
  args: {
    text: 'primary button',
    variant: 'primary',
  },
};

export const SecondaryButton: Story = {
  args: {
    text: 'secondary button',
    variant: 'secondary',
  },
};

export const SuccessButton: Story = {
  args: {
    text: 'success button',
    variant: 'success',
  },
};

export const WarningButton: Story = {
  args: {
    text: 'warning button',
    variant: 'warning',
  },
};

export const ErrorButton: Story = {
  args: {
    text: 'error button',
    variant: 'error',
  },
};

export const BorderButton: Story = {
  args: {
    text: 'border button',
    variant: 'error',
    hasBorder: true,
  },
};
