import type { Meta, StoryObj } from '@storybook/react';

import Input from '.';

type Story = StoryObj<typeof Input>;

/**
 * 로그인 Input 컴포넌트
 */
const meta: Meta<typeof Input> = {
  title: 'Login/Input',
  component: Input,
};

export default meta;

export const InputEmail: Story = {
  args: {
    type: 'email',
  },
};

export const InputPassword: Story = {
  args: {
    type: 'password',
  },
};
