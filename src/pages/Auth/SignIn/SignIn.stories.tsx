import type { Meta, StoryObj } from '@storybook/react';

import SignIn from '.';

type Story = StoryObj<typeof SignIn>;

/**
 * 로그인 컴포넌트
 */
const meta: Meta<typeof SignIn> = {
  title: 'SignIn',
  component: SignIn,
};

export default meta;

export const SignInDefault: Story = {};
