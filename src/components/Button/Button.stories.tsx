import type { Meta, StoryObj } from '@storybook/react';

import { VARIANT } from '@Constant/style';

import Button from '.';

type Story = StoryObj<typeof Button>;

/**
 * `MemoButton` 컴포넌트는 메인 화면의 메모버튼 컴포넌트입니다.
 */
const meta: Meta<typeof Button> = {
  title: 'Button/Button',
  component: Button,
  argTypes: {
    variant: {
      options: VARIANT,
      control: { type: 'radio' },
    },
  },
};

export default meta;

export const DefaultButton: Story = {
  args: {
    children: '버튼',
  },
};

export const SecondaryButton: Story = {
  args: {
    children: '버튼',
    variant: 'secondary',
  },
};

export const FullWidthButton: Story = {
  args: {
    children: '버튼',
    fullWidth: true,
  },
};

export const DisabledButton: Story = {
  args: {
    children: '버튼',
    disabled: true,
  },
};
