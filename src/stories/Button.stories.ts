import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

/**
 * `Button`은 어느 페이지에서든 사용하는 컴포넌트입니다.
 */
const meta = {
  title: 'Buttons',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
