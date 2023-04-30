import type { Meta, StoryObj } from '@storybook/react';
import Input from '.';

/**
 * `Input`은 입력 필드 컴포넌트입니다.
 */
const meta = {
  title: 'Input',
  component: Input,
  argTypes: {
    color: {
      options: ['basic', 'accent'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: 'text',
    placeholder: '내용을 입력하세요.',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    color: 'accent',
  },
};
