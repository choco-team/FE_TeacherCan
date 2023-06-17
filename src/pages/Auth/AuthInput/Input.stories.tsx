import type { Meta, StoryObj } from '@storybook/react';

import AuthInput from '.';

type Story = StoryObj<typeof AuthInput>;

/**
 * 로그인/회원가입 AuthInput 컴포넌트
 */
const meta: Meta<typeof AuthInput> = {
  title: 'SignIn/AuthInput',
  component: AuthInput,
};

export default meta;

export const InputEmail: Story = {
  args: {
    name: 'id',
  },
};

export const InputPassword: Story = {
  args: {
    name: 'password',
  },
};
