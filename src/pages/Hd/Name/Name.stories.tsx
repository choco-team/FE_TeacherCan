import type { Meta, StoryObj } from '@storybook/react';
import Name from '.';

/**
 * `Button`은 어느 페이지에서든 사용하는 컴포넌트입니다.
 */
const meta = {
  title: 'Button',
  component: Name,
  argTypes: {
    age: {
      options: [25, 28, 30, 32],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Name>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryName: Story = {
  args: {
    name: '홍동',
    age: 30,
  },
};

export const SecondaryName: Story = {
  args: {
    name: '홍동2',
    age: 30,
  },
};
