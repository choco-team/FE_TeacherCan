import type { Meta, StoryObj } from '@storybook/react';

import HDButton from '.';

type Story = StoryObj<typeof HDButton>;

/**
 * `HDButton` 컴포넌트는 연습 버튼 컴포넌트입니다.
 */
const meta: Meta<typeof HDButton> = {
  title: 'HDButton',
  component: HDButton,
};

export default meta;

export const PrimaryButton: Story = {
  args: {
    text: 'primary button',
    color: 'primary',
  },
};

export const SecondaryButton: Story = {
  args: {
    text: 'secondary button',
    color: 'secondary',
  },
};

export const SuccessButton: Story = {
  args: {
    text: 'success button',
    color: 'success',
  },
};

export const WarningButton: Story = {
  args: {
    text: 'warning button',
    color: 'warning',
  },
};

export const ErrorButton: Story = {
  args: {
    text: 'error button',
    color: 'error',
  },
};

export const BorderButton: Story = {
  args: {
    text: 'border button',
    color: 'primary',
    border: true,
  },
};
